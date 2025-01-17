import { Chip, IconButton } from "@material-ui/core";
import { Add, Delete, RestoreFromTrash } from "@material-ui/icons";
import { ReactElement } from "react";

import { FieldParameterStandard } from "goals/ReviewEntries/ReviewEntriesComponent/CellColumns";
import AlignedList from "goals/ReviewEntries/ReviewEntriesComponent/CellComponents/AlignedList";
import { ReviewEntriesSense } from "goals/ReviewEntries/ReviewEntriesComponent/ReviewEntriesTypes";

interface SenseCellProps {
  delete: (deleteIndex: string) => void;
}

export default function SenseCell(
  props: SenseCellProps & FieldParameterStandard
): ReactElement {
  function addSense(): ReactElement {
    const senses = [...props.rowData.senses, new ReviewEntriesSense()];
    return (
      <Chip
        id={`row-${props.rowData.id}-sense-add`}
        label={<Add />}
        onClick={() =>
          props.onRowDataChange &&
          props.onRowDataChange({ ...props.rowData, senses })
        }
      />
    );
  }

  return (
    <AlignedList
      key={`delete:${props.rowData.id}`}
      listId={`delete${props.rowData.id}`}
      contents={props.rowData.senses.map((value) => (
        <IconButton
          size="small"
          onClick={() => props.delete!(value.guid)}
          id={`sense-${value.guid}-delete`}
          key={value.guid}
        >
          {value.deleted ? <RestoreFromTrash /> : <Delete />}
        </IconButton>
      ))}
      bottomCell={addSense()}
    />
  );
}
