using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsStoreApi.Models;

namespace SportsStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static List<Product> _products = new List<Product>()
            {
                new Product{Id=Guid.NewGuid(),Name="Kayak",Description="A boat for one person",Category="Watersports",Price=275},
                new Product{Id=Guid.NewGuid(),Name="Lifejacket",Description="Protective and fashionable",Category="Watersports",Price=48.95M},
                new Product{Id=Guid.NewGuid(),Name="Soccer Ball",Description="FIFA approved size and weight",Category="Soccer",Price=19.5M},
                new Product{Id=Guid.NewGuid(),Name="Corner Flags",Description="Give your playing field a professional touch",Category="Soccer",Price=34.95M},
                new Product{Id=Guid.NewGuid(),Name="Stadium",Description="Flat packed 35,000 capacity stadium",Category="Soccer",Price=79500.00M},
                new Product{Id=Guid.NewGuid(),Name="Thinking Cap",Description="Improve your brain efficinecy by 75%",Category="Chess",Price=16},
                new Product{Id=Guid.NewGuid(),Name="Unsteady Chair",Description="Secretly give your opponent a disadvantage",Category="Chess",Price=29.95M},
                new Product{Id=Guid.NewGuid(),Name="Human Chess Board",Description="A fun game for family",Category="Chess",Price=75},
                new Product{Id=Guid.NewGuid(),Name="Bling-Bling King",Description="Gold-plated, diamond studded King",Category="Chess",Price=1200},
            };
        //public ProductsController()
        //{
        //    _products = new List<Product>()
        //    {
        //        new Product{Id=Guid.NewGuid(),Name="Kayak",Description="A boat for one person",Category="Watersports",Price=275},
        //        new Product{Id=Guid.NewGuid(),Name="Lifejacket",Description="Protective and fashionable",Category="Watersports",Price=48.95M},
        //        new Product{Id=Guid.NewGuid(),Name="Soccer Ball",Description="FIFA approved size and weight",Category="Soccer",Price=19.5M},
        //        new Product{Id=Guid.NewGuid(),Name="Corner Flags",Description="Give your playing field a professional touch",Category="Soccer",Price=34.95M},
        //        new Product{Id=Guid.NewGuid(),Name="Stadium",Description="Flat packed 35,000 capacity stadium",Category="Soccer",Price=79500.00M},
        //        new Product{Id=Guid.NewGuid(),Name="Thinking Cap",Description="Improve your brain efficinecy by 75%",Category="Chess",Price=16},
        //        new Product{Id=Guid.NewGuid(),Name="Unsteady Chair",Description="Secretly give your opponent a disadvantage",Category="Chess",Price=29.95M},
        //        new Product{Id=Guid.NewGuid(),Name="Human Chess Board",Description="A fun game for family",Category="Chess",Price=75},
        //        new Product{Id=Guid.NewGuid(),Name="Bling-Bling King",Description="Gold-plated, diamond studded King",Category="Chess",Price=1200},
        //    };

        //}

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_products);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product product)
        {
            product.Id = Guid.NewGuid();
            _products.Add(product);
            return Created($"https://localhost:44323/api/products/{product.Id}", product);
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var product = _products.FirstOrDefault(p => p.Id == id);
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var product= _products.FirstOrDefault(p => p.Id == id);
            _products.Remove(product);
            return NoContent();
        }

        [HttpPost("{id}")]
        public IActionResult Put([FromBody] Product product, Guid id)
        {

            var origProduct = _products.FirstOrDefault(p => p.Id == id);
            origProduct.Category = product.Category;
            origProduct.Name = product.Name;
            origProduct.Description = product.Description;
            origProduct.Price = product.Price;


            return Ok();
        }
    }
}