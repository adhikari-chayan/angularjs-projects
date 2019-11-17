using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace SportsStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MqController : ControllerBase
    {
        [HttpGet("")]
       public async Task<IActionResult> Get()
        {
            HttpClient client = new HttpClient();


            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
                                                        Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", "guest", "guest"))));

            //client.BaseAddress = new Uri("http://localhost:15672");

            


            RabbitMqPayload payload = new RabbitMqPayload();
            payload.Properties = new RabbitMqProperties();
            payload.Properties.Headers = new Dictionary<string, object>();
            payload.Properties.Headers.Add("Authorization", "open-token fjghdfhgsdljgljglsjsgljlsdjgs");
            payload.RoutingKey = "osr-audit";
            payload.Payload = "{\"details\":{\"summary\":\"Created new Account\",\"entityId\":\"77c0b69f-4a99-435f-b9cf-aa2a01107c5a\",\"entityType\":\"Account\"},\"action\":\"Created\",\"onesourceFirm\":\"UITestCompany1\",\"userName\":\"TestUser1\",\"timeStamp\":\"2019 - 04 - 09T11: 02:07.4501212Z\",\"currentState\":{\"Id\":\"77c0b69f-4a99-435f-b9cf-aa2a01107c5a\",\"Code\":\"TestH\",\"Name\":\"TestHttp\",\"ContainerId\":\"00000000-0000-0000- 0000-000000000000\",\"RoundIndependently\":false,\"IsRounding\":false,\"IsSuspense\":false,\"Balances\":[{\"Id\":\"8498b97d-68a1-48fa-b102-aa2a01107c62\",\"Amount\":11000.0},{\"Id\":\"bc958f88-d7af-4a5f-8a02-aa2a01107c62\",\"Amount\":12000.0}]}}";
            payload.PayloadEncoding = "string";
            string postBody = JsonConvert.SerializeObject(payload);
            string vHost = "";
            string host = "http://localhost:15672";
            if (String.IsNullOrEmpty(vHost))
                vHost = "%2F";
            string path = string.Format("{0}/api/exchanges/{1}/amq.default/publish", host, vHost);
            //path = Uri.UnescapeDataString(path);
            var url = new Uri(path);
            HttpResponseMessage response = await client.PostAsync(url, new StringContent(postBody, Encoding.UTF8, "application/json"));
            // Parse the response body. Blocking!
            if (response.IsSuccessStatusCode)
            {
                var httpResponseResult = response.Content.ReadAsStringAsync().ContinueWith(task => task.Result).Result;
                //var data = JObject.Parse(httpResponseResult);
                //var responseCode = data.SelectToken("code").Value();
                //var message = data.SelectToken("message").Value();
            }

            return Ok();
        }
    }

    public class RabbitMqPayload
    {
        [JsonProperty("properties")]
        public RabbitMqProperties Properties { get; set; }

        [JsonProperty("routing_key")]
        public string RoutingKey { get; set; }

        [JsonProperty("payload")]
        public string Payload { get; set; }

        [JsonProperty("payload_encoding")]
        public string PayloadEncoding { get; set; }

    }

    public class RabbitMqProperties
    {

        [JsonProperty("headers")]
        public IDictionary<string, object> Headers { get; set; }
    }

    public class RabbitMqCreate
    {
        [JsonProperty("auto_delete")]
        public bool AutoDelete { get; set; }
        [JsonProperty("durable")]
        public bool Durable { get; set; }

        [JsonProperty("arguments")]
        public IDictionary<string, object> Args { get; set; }
    }

    public class RabbitMqCreateExchange : RabbitMqCreate
    {
        [JsonProperty("type")]
        public string Type { get; set; }
    }

    public class RabbitMqCreateBinding : RabbitMqCreate
    {
        [JsonProperty("routing_key")]
        public string RoutingKey { get; set; }
    }
}

   

    
