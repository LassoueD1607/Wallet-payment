using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentInternship.Data;
using PaymentInternship.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PaymentInternship.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenerateController : ControllerBase
    {
        private readonly ContextPayment _context;

        public GenerateController(ContextPayment context)
        {
            _context = context;
        }
        public static MerchantDetails merchantDetails = new MerchantDetails();
        // GET: api/<GenerateController>
        [HttpGet("TransactionId")]
        public async Task<GenerateTransactionId> Get()
        {
            GenerateTransactionId generateTransactionId = new GenerateTransactionId();
            Transaction transaction = new Transaction();
            transaction.Id = generateTransactionId.TransactionId;
            transaction.ClientName = "Motez123";
            transaction.StatusCode = 0;

            _context.transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return generateTransactionId;


        }

        [HttpGet("Response")]
        public IEnumerable<Response> GetResponse()
        {
            return new[] { UsersController.responseMessage };
        }

        [HttpGet("MerchantDetails")]
        public MerchantDetails GetMerchantDetails()
        {
            return merchantDetails;
        }

    }
}
