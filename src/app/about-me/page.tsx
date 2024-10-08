import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

  export default function AboutMe() {
    return (
      <div>
          Hello world this is the about me route
          <Card>
              <CardHeader>
                  <CardTitle>
                      Hello I am joanne
                  </CardTitle>
                  <CardDescription>
                      I hate coding....
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="flex flex-row gap-2">
                      <p className="font-bold">Name:</p>
                      Joanne
                  </div>
                  <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                  <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>Sleeping</div>
              </CardContent>
          </Card>
      </div>
    );
  }
  