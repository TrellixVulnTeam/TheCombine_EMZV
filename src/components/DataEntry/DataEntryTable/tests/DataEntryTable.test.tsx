import renderer, {
  ReactTestInstance,
  ReactTestRenderer,
} from "react-test-renderer";

import "tests/mockReactI18next";

import { Sense, Word } from "api/models";
import DataEntryTable, {
  addSemanticDomainToSense,
  addSenseToWord,
  exitButtonId,
} from "components/DataEntry/DataEntryTable/DataEntryTable";
import NewEntry from "components/DataEntry/DataEntryTable/NewEntry/NewEntry";
import { newProject } from "types/project";
import {
  newSemanticDomain,
  newSemanticDomainTreeNode,
  semDomFromTreeNode,
} from "types/semanticDomain";
import { multiSenseWord, newSense, simpleWord } from "types/word";
import { firstGlossText } from "types/wordUtilities";
import { Bcp47Code } from "types/writingSystem";

jest.mock("backend", () => ({
  createWord: (word: Word) => mockCreateWord(word),
  getDuplicateId: jest.fn(),
  getProject: (id: string) => mockGetProject(id),
  getWord: (id: string) => mockGetWord(id),
  updateWord: (word: Word) => mockUpdateWord(word),
}));
jest.mock("components/DataEntry/DataEntryTable/RecentEntry/RecentEntry");
jest.mock("components/Pronunciations/PronunciationsComponent", () => "div");
jest.mock("components/Pronunciations/Recorder");
jest.spyOn(window, "alert").mockImplementation(() => {});

let testRenderer: ReactTestRenderer;
let testHandle: ReactTestInstance;

const mockWord = () => simpleWord("mockVern", "mockGloss");
const mockMultiWord = multiSenseWord("vern", ["gloss1", "gloss2"]);
const mockTreeNode = newSemanticDomainTreeNode();
const mockSemanticDomain = semDomFromTreeNode(mockTreeNode);
const mockOpenTree = jest.fn();
const getWordsFromBackendMock = jest.fn();

const mockCreateWord = jest.fn();
const mockGetProject = jest.fn();
const mockGetWord = jest.fn();
const mockHideQuestions = jest.fn();
const mockUpdateWord = jest.fn();
function setMockFunction() {
  mockCreateWord.mockResolvedValue(mockWord());
  mockGetProject.mockResolvedValue(newProject());
  mockGetWord.mockResolvedValue([mockMultiWord]);
  mockUpdateWord.mockResolvedValue(mockWord());
}

beforeEach(() => {
  jest.clearAllMocks();
  setMockFunction();
  getWordsFromBackendMock.mockResolvedValue([mockMultiWord]);
  renderer.act(() => {
    testRenderer = renderer.create(
      <DataEntryTable
        semanticDomain={mockTreeNode}
        openTree={mockOpenTree}
        hideQuestions={mockHideQuestions}
        getWordsFromBackend={getWordsFromBackendMock}
        showExistingData={jest.fn()}
      />
    );
  });
});

async function exitToTree() {
  await renderer.act(async () => {
    testRenderer.update(
      <DataEntryTable
        semanticDomain={mockTreeNode}
        treeIsOpen
        openTree={mockOpenTree}
        hideQuestions={mockHideQuestions}
        getWordsFromBackend={getWordsFromBackendMock}
        showExistingData={jest.fn()}
      />
    );
  });
}

describe("DataEntryTable", () => {
  describe("exiting--i.e., props updated to open tree", () => {
    it("hides questions", async () => {
      expect(mockHideQuestions).not.toBeCalled();
      await exitToTree();
      expect(mockHideQuestions).toBeCalled();
    });

    it("creates word when new entry has vernacular", async () => {
      // Verify that NewEntry is present
      const newEntryItems = testRenderer.root.findAllByType(NewEntry);
      expect(newEntryItems.length).toBe(1);
      // Set the new entry to have useful content
      const newEntry = simpleWord("hasVern", "");
      newEntryItems[0].instance.setState({ newEntry });
      await exitToTree();
      expect(mockCreateWord).toBeCalled();
    });

    it("doesn't create word when new entry has no vernacular", async () => {
      // Verify that NewEntry is present
      const newEntryItems = testRenderer.root.findAllByType(NewEntry);
      expect(newEntryItems.length).toBe(1);
      // Set the new entry to have no useful content
      const newEntry = simpleWord("", "hasGloss");
      newEntryItems[0].instance.setState({ newEntry });
      await exitToTree();
      expect(mockCreateWord).not.toBeCalled();
    });
  });

  it("open the domain tree when exit is clicked", () => {
    expect(mockOpenTree).not.toBeCalled();
    testRenderer.root.findByProps({ id: exitButtonId }).props.onClick();
    expect(mockOpenTree).toBeCalledTimes(1);
  });

  it("adds a sense to a word that has no senses", () => {
    const word = mockWord();
    word.senses = [];
    const gloss = "firstSense";
    const language = Bcp47Code.Es;

    const expectedSense = newSense(gloss, language, mockSemanticDomain);
    expectedSense.guid = expect.any(String);
    const expectedWord: Word = { ...word, senses: [expectedSense] };

    const resultWord = addSenseToWord(
      mockSemanticDomain,
      word,
      gloss,
      language
    );
    expect(resultWord).toEqual(expectedWord);
  });

  it("adds a sense to a word that already has a sense", () => {
    const word = mockWord();
    const gloss = "newSense";
    const language = Bcp47Code.Es;

    const expectedSense = newSense(gloss, language, mockSemanticDomain);
    expectedSense.guid = expect.any(String);
    const expectedWord: Word = {
      ...word,
      senses: [...word.senses, expectedSense],
    };

    const resultWord = addSenseToWord(
      mockSemanticDomain,
      word,
      gloss,
      language
    );
    expect(resultWord).toEqual(expectedWord);
  });

  it("adds a semantic domain to existing sense", () => {
    const word = mockWord();
    const gloss = "senseToBeModified";
    const language = Bcp47Code.Fr;
    const sense = newSense(gloss, language);
    word.senses = [sense];

    const expectedSense: Sense = {
      ...sense,
      semanticDomains: [mockSemanticDomain],
    };
    const expectedWord: Word = { ...word, senses: [expectedSense] };

    const resultWord = addSemanticDomainToSense(mockSemanticDomain, word, 0);
    expect(resultWord).toEqual(expectedWord);
  });

  it("doesn't update word in backend if sense is a duplicate", (done) => {
    testHandle = testRenderer.root.findAllByType(DataEntryTable)[0];
    mockMultiWord.senses[0].semanticDomains = [
      newSemanticDomain("differentSemDomId"),
      newSemanticDomain(testHandle.instance.props.semanticDomain.id),
    ];
    testHandle.instance.setState({ existingWords: [mockMultiWord] }, () => {
      testRenderer.root
        .findByType(NewEntry)
        .props.updateWordWithNewGloss(
          mockMultiWord.id,
          firstGlossText(mockMultiWord.senses[0]),
          []
        )
        .then(() => {
          // Assert that the backend function for updating the word was NOT called
          expect(mockUpdateWord).not.toBeCalled();
          done();
        });
    });
  });

  it("updates word in backend if gloss exists with different semantic domain", (done) => {
    testHandle = testRenderer.root.findAllByType(DataEntryTable)[0];
    mockMultiWord.senses[0].semanticDomains = [
      newSemanticDomain("differentSemDomId"),
      newSemanticDomain("anotherDifferentSemDomId"),
      newSemanticDomain("andAThird"),
    ];
    testHandle.instance.setState({ existingWords: [mockMultiWord] }, () => {
      testRenderer.root
        .findByType(NewEntry)
        .props.updateWordWithNewGloss(
          mockMultiWord.id,
          firstGlossText(mockMultiWord.senses[0]),
          []
        )
        .then(() => {
          // Assert that the backend function for updating the word was called once
          expect(mockUpdateWord).toBeCalledTimes(1);
          done();
        });
    });
  });

  it("updates word in backend if gloss doesn't exist", (done) => {
    testHandle = testRenderer.root.findAllByType(DataEntryTable)[0];
    testHandle.instance.setState({ existingWords: [mockMultiWord] }, () => {
      testRenderer.root
        .findByType(NewEntry)
        .props.updateWordWithNewGloss(mockMultiWord.id, "differentGloss", [])
        .then(() => {
          // Assert that the backend function for updating the word was called once
          expect(mockUpdateWord).toBeCalledTimes(1);
          done();
        });
    });
  });
});
