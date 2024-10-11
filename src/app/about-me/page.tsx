// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

//   export default function AboutMe() {
//     return (
//       <div>
//           Hello world this is the about me route
//           <Card>
//               <CardHeader>
//               <img 
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZLEqFDeM3iy8OUMpmTrShak0UoQ2vcoL_A&s" 
//                 className="w-25 h-23 mb-2" 
//               />
//               <CardTitle>
//                   Hello I am joanne <br/><br/>
//                   안녕하세요! 저는 조앤이에요 :D
//               </CardTitle>
//               <CardDescription>
//                   I hate coding....
//               </CardDescription>
//               </CardHeader>
//               <CardContent>
//                   <div className="flex flex-row gap-2">
//                       <p className="font-bold">Name:</p>
//                       Joanne
//                   </div>
//                   <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
//                   <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>Sleeping</div>
//               </CardContent>
//           </Card>
//       </div>
//     );
//   }
  


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
      <Card className="shadow-lg max-w-md w-full">
        <CardHeader>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZLEqFDeM3iy8OUMpmTrShak0UoQ2vcoL_A&s" 
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-gray-200" 
            alt="Joanne"
          />
          <CardTitle className="text-2xl font-semibold text-white-900">
            Hello, I am Joanne
            <br />
            <span className="text-lg text-white-600">안녕하세요! 저는 조앤이에요 :D</span>
          </CardTitle>
          <CardDescription className="text-white-600 italic">
            I hate coding....
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="font-bold text-white-800">Name:</p>
              <p className="text-white-700">Joanne</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold text-white-800">Major:</p>
              <p className="text-white-700">Information Systems</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-bold text-white-800">Hobbies:</p>
              <p className="text-white-700">Sleeping</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
