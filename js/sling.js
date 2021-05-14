class Sling
{
   constructor (body1,point2)
   {
    var options =
    {
       bodyA: body1,
       pointB: point2,
       stiffness: 0.1,
       length: 50

    }

    this.slingshot = Constraint.create (options);
    World.add(world,this.slingshot);
   }

   display()
   {
      if(this.slingshot.bodyA)
      {
    var body1pos = this.slingshot.bodyA.position;
    var body2pos = this.slingshot.pointB;
    line(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
      }
   }

   fly()
    {
      this.slingshot.bodyA = null;
    }

    attach(body1)
    {
      this.slingshot.bodyA = body1 
    }
}

