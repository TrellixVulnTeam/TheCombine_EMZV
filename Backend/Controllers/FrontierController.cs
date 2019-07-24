using BackendFramework.Interfaces;
using BackendFramework.ValueModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BackendFramework.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("v1/projects/{projectId}/words/frontier")]
    [EnableCors("AllowAll")]
    public class FrontierController : Controller
    {
        private readonly IWordRepository _repo;

        public FrontierController(IWordRepository repo)
        {
            _repo = repo;
        }

        /// <summary> Returns all words in a project's frontier </summary>
        /// <remarks> GET: v1/project/{projectId}/words/frontier </remarks>
        [HttpGet]
        public async Task<IActionResult> GetFrontier(string projectId)
        {
            return new ObjectResult(await _repo.GetFrontier(projectId));
        }

        /// <summary> Adds word to a project's frontier </summary>
        /// <remarks> POST: v1/project/{projectId}/words/frontier </remarks>
        /// <returns> Id of word created </returns>
        [HttpPost]
        public async Task<IActionResult> PostFrontier(string projectId, [FromBody]Word word)
        {
#if DEBUG
            word.ProjectId = projectId;
            await _repo.AddFrontier(word);
            return new OkObjectResult(word.Id);
#else
            return new UnauthorizedResult();
#endif
        }

        /// <summary> Deletes all words in a project's frontier </summary>
        /// <remarks> DELETE: v1/project/{projectId}/words/frontier/{wordId} </remarks>
        [HttpDelete("{wordId}")]
        public async Task<IActionResult> DeleteFrontier(string projectId, string wordId)
        {
#if DEBUG
            if (await _repo.DeleteFrontier(projectId, wordId))
            {
                return new OkResult();
            }
            return new NotFoundResult();
#else
            return new UnauthorizedResult();
#endif
        }
    }
}