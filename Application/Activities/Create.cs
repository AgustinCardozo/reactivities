using Domain;
using MediatR;
using Persistence;

namespace Application.Activities;

public class Create
{
  public class Command : IRequest
  {
    public Activity Activity { get; set; }
  }

  public class Handler : IRequestHandler<Command>
  {
    private readonly DataContext dataContext;

    public Handler(DataContext dataContext)
    {
      this.dataContext = dataContext;
    }

    public async Task Handle(Command request, CancellationToken cancellationToken)
    {
      dataContext.Activities.Add(request.Activity); // no es necesario que sea async porque esta en memoria todavía
      await dataContext.SaveChangesAsync();
    }
  }
}