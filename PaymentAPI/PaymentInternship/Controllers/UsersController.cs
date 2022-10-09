﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentInternship.Data;
using PaymentInternship.Models;

namespace PaymentInternship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ContextPayment _context;
        public static Response responseMessage = new Response();
        static Login payment = new Login();

        public UsersController(ContextPayment context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Getusers()
        {
          if (_context.users == null)
          {
              return NotFound();
          }
            return await _context.users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
          if (_context.users == null)
          {
              return NotFound();
          }
            var user = await _context.users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.IdUser)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
          if (_context.users == null)
          {
              return Problem("Entity set 'ContextPayment.users'  is null.");
          }
            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.IdUser }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.users == null)
            {
                return NotFound();
            }
            var user = await _context.users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return (_context.users?.Any(e => e.IdUser == id)).GetValueOrDefault();
        }
        [HttpPost("Login")]
        public void Post([FromBody] Login pay)
        {
            bool changed = false;
            bool found = false;
            payment = pay;
            foreach (var customer in _context.users)
            {
                if (customer.PhoneNumber == pay.phoneNumber)
                {
                    found = true;
                    if (customer.Password == pay.password)
                    {
                        if (customer.Balance >= pay.Value)
                        {
                            customer.Balance = customer.Balance - pay.Value;
                            GenerateController.merchantDetails.Balance += pay.Value;
                            _context.users.Update(customer);
                            changed = true;
                        }
                        else
                        {
                            responseMessage.ResponseMessage = "Balance insufficent";
                        }
                    }
                    else { responseMessage.ResponseMessage = "Incorrect Password"; }
                }

            }
            if (changed)
            {
                _context.SaveChanges();
                responseMessage.ResponseMessage = "Valid";
            }
            if (!found)
            {
                responseMessage.ResponseMessage = "Invalid Customer";
            }



        }
    }
}
