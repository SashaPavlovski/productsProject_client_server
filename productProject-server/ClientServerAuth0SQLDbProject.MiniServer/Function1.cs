using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using ClientServerAuth0SQLDbProject.Model;
using ClientServerAuth0SQLDbProject.Entites;


namespace ClientServerAuth0SQLDbProject.MiniServer
{
    public static class Function1
    {
          [FunctionName("Priducts")]
          public static async Task<IActionResult> Run(
              [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
              ILogger log)
          {
              if(req.Method == HttpMethods.Get)
              {
                  log.LogInformation("C# HTTP trigger function processed a request.");
                  string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                  JsonConvert.DeserializeObject(requestBody);

                  List<Product> productList = MainManager.INSTANCE.Init();
                  string responseMessage = System.Text.Json.JsonSerializer.Serialize(productList);

                  return new OkObjectResult(responseMessage);
              }else if (req.Method == HttpMethods.Post)
              {
                log.LogInformation("C# HTTP trigger function processed a request.");
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                UserComment userComment = System.Text.Json.JsonSerializer.Deserialize<UserComment>(requestBody);
                if(userComment.FirstName != null && userComment.LastName != null&& userComment.Username != null&& userComment.ContactUsInput != null&& userComment.EmailAddress != null)
                {
                 MainManager.INSTANCE.pustUsersComment(userComment);

                    return new OkObjectResult("The operation was successful");
                }
                return new OkObjectResult("The operation failed");

            }
            return null;

        }
    }
}
        
