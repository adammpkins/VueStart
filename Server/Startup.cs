using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;
using VueStart.Services;
using VueStart.Middlewares;

namespace VueStart
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddMemoryCache();
            var connectionString = Configuration.GetConnectionString("MySQL");
            if (!string.IsNullOrWhiteSpace(connectionString)) {
                services.AddDbContext<ApplicationDbContext>(options => options.UseMySql(connectionString, ServerVersion.Parse("8.0.23")), ServiceLifetime.Transient, ServiceLifetime.Transient);
            } else {
                var connection = new SqliteConnection("DataSource=:memory:");
                connection.Open();
                services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite(connection), ServiceLifetime.Transient, ServiceLifetime.Transient);
            }
            services.AddScoped<StatisticsService>();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthorization();
            app.UseCors();


            app.UseMiddleware<VisitorMiddleware>();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


            if (env.IsDevelopment())
            {
                app.UseSpa(spa =>
                {
                    spa.UseProxyToSpaDevelopmentServer($"http://localhost:8080");
                });
            }
        }
    }
}
