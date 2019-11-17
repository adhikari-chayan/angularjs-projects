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
    public class OrdersController : ControllerBase
    {
        private static List<Order> _orders =  new List<Order>()
            {
                new Order
                { Id=Guid.NewGuid(),Name="Adam Freeman",City="London",Products=new List<Product>()
                    {
                        new Product{Name="Kayak",Price=275,Count=1},
                        new Product{Name="Lifejacket",Price=48.95M,Count=2}
                    }
                },
                new Order
                { Id=Guid.NewGuid(),Name="Jane Doe",City="New York",Products=new List<Product>()
                    {
                        new Product{Name="Soccer Ball",Price=19.5M,Count=1},
                        new Product{Name="Bling-Bling King",Price=1200,Count=2}
                    }
                },
                new Order
                { Id=Guid.NewGuid(),Name="John Smith",City="Sanfransisco",Products=new List<Product>()
                    {
                        new Product{Name="Unsteady Chair",Price=29.95M,Count=1},
                        new Product{Name="Human Chess Board",Price=75,Count=2}
                    }
                }

            };

        //public OrdersController()
        //{
        //    _orders = new List<Order>()
        //    {
        //        new Order
        //        { Id=Guid.NewGuid(),Name="Adam Freeman",City="London",Products=new List<Product>()
        //            {
        //                new Product{Name="Kayak",Price=275,Count=1},
        //                new Product{Name="Lifejacket",Price=48.95M,Count=2}
        //            }
        //        },
        //        new Order
        //        { Id=Guid.NewGuid(),Name="Jane Doe",City="New York",Products=new List<Product>()
        //            {
        //                new Product{Name="Soccer Ball",Price=19.5M,Count=1},
        //                new Product{Name="Bling-Bling King",Price=1200,Count=2}
        //            }
        //        },
        //        new Order
        //        { Id=Guid.NewGuid(),Name="John Smith",City="Sanfransisco",Products=new List<Product>()
        //            {
        //                new Product{Name="Unsteady Chair",Price=29.95M,Count=1},
        //                new Product{Name="Human Chess Board",Price=75,Count=2}
        //            }
        //        }

        //    };
        //}

        [HttpPost]
        public IActionResult Post([FromBody] Order order)
        {
            order.Id = Guid.NewGuid();
            return Ok(order);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_orders);
        }
    }
}