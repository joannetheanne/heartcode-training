// "use client"

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";
// import { insertOneUser } from "../server/user";

// const FormSchema = z.object({
// 	name: z.string({
//     	required_error: "Please enter a name"
// 	}).min(2, {
//     	message: "name must be more than 2 characters long"
// 	}).max(20, {
//     	message: "name must be no longer than 20 characters"
// 	}),
// 	question2: z.string({
//     	required_error: "Please select an option"
// 	}),
// 	question3: z.string({
// 		required_error: "Please select an option"
// 	}),
// 	question4: z.string({
// 		required_error: "Please select an option"
// 	})
// })

// export default function Quiz() {
// 	const { toast } = useToast();

// 	const form = useForm<z.infer<typeof FormSchema>>({
//     	resolver: zodResolver(FormSchema)
// 	})

//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     let description = "";

//     if (data.question2 === "yes") {
//         description = "You are a drug dealer";
        
//         if (data.question3 === "yes") {
//             description += " and are involved in drug trafficking.";
//         } else if (data.question3 === "no") {
//             description += ", but not involved in drug trafficking.";
//         }

//         if (data.question4 === "yes") {
//             description += `For assistance, please visit this page: https://www.healthhub.sg/live-healthy/getting_support`;
//         } 
        
//     } else if (data.question2 === "no") {
//         //description = "Unfortunately you are not a drug dealer";
// 		if (data.question3 === "yes"){
// 			description += `You are involved in drug trafficking.`
// 		}
//         if (data.question4 === "yes") {
//             description += `For assistance, please visit this page: https://www.healthhub.sg/live-healthy/getting_support`;
//         }
//     }

//     // Display the combined result in a single toast
//     toast({
//         title: `Thank you ${data.name}`,
//         description: description,
//     });

// 	let isDrugDealer;
// 	let isDrugTrafficker;
// 	let needHelp;

// 	if (data.question2 === "yes") {
// 		isDrugDealer = true;
// 	} else {
// 		isDrugDealer = false;
// 	}

// 	if (data.question3 === "yes") {
// 		isDrugTrafficker = true;
// 	} else {
// 		isDrugTrafficker = false;
// 	}

// 	if (data.question4 === "yes") {
// 		needHelp = true;
// 	} else {
// 		needHelp = false;
// 	}

// 	await insertOneUser(data.name, isDrugDealer, isDrugTrafficker, needHelp);
//   }

// 	return (
//     	<Form {...form}>
//         	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
//             	<FormField
//                 	control={form.control}
//                 	name="name"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 1:</FormLabel>
//                         	<FormDescription>What is your name?</FormDescription>
//                             	<FormControl>
//                                 	<Input placeholder="your name here" {...field}/>
//                             	</FormControl>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>
//             	<FormField
//                 	control={form.control}
//                 	name="question2"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 2:</FormLabel>
//                         	<FormDescription>Do you sell drugs?</FormDescription>
//                         	<Select onValueChange={field.onChange} defaultValue={field.value}>
//                             	<FormControl>
//                                 	<SelectTrigger>
//                                     	<SelectValue placeholder="Please select an answer"/>
//                                 	</SelectTrigger>
//                             	</FormControl>
//                             	<SelectContent>
//                                 	<SelectItem value="yes">Yes</SelectItem>
//                                 	<SelectItem value="no">No</SelectItem>
//                             	</SelectContent>
//                         	</Select>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>
//               <FormField
//                 	control={form.control}
//                 	name="question3"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 3:</FormLabel>
//                         	<FormDescription>Do you consume drugs?</FormDescription>
//                         	<Select onValueChange={field.onChange} defaultValue={field.value}>
//                             	<FormControl>
//                                 	<SelectTrigger>
//                                     	<SelectValue placeholder="Please select an answer"/>
//                                 	</SelectTrigger>
//                             	</FormControl>
//                             	<SelectContent>
//                                 	<SelectItem value="yes">Yes</SelectItem>
//                                 	<SelectItem value="no">No</SelectItem>
//                             	</SelectContent>
//                         	</Select>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>

// 				<FormField
//                 	control={form.control}
//                 	name="question4"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 4:</FormLabel>
//                         	<FormDescription>Do you need help to quit?</FormDescription>
//                         	<Select onValueChange={field.onChange} defaultValue={field.value}>
//                             	<FormControl>
//                                 	<SelectTrigger>
//                                     	<SelectValue placeholder="Please select an answer"/>
//                                 	</SelectTrigger>
//                             	</FormControl>
//                             	<SelectContent>
//                                 	<SelectItem value="yes">Yes</SelectItem>
//                                 	<SelectItem value="no">No</SelectItem>
//                             	</SelectContent>
//                         	</Select>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>

//             	<Button type="submit">Submit</Button>
//         	</form>
//     	</Form>
// 	)
// }





"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertOneUser } from "../server/user";

// Schema validation
const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter your name"
  })
  .min(2, { message: "Name must be more than 2 characters long" })
  .max(20, { message: "Name must be no longer than 20 characters" }),
  
  question2: z.string({ required_error: "Please select an option" }),
  question3: z.string({ required_error: "Please select an option" }),
  question4: z.string({ required_error: "Please select an option" })
});

export default function Quiz() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      question2: '',
      question3: '',
      question4: '',
    }
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let description = "";

    if (data.question2 === "yes") {
      description = "You are a drug dealer";

      if (data.question3 === "yes") {
        description += " and are involved in drug trafficking.";
      } else {
        description += ", but not involved in drug trafficking.";
      }

      if (data.question4 === "yes") {
        description += ` For assistance, please visit this page: https://www.healthhub.sg/live-healthy/getting_support`;
      }

    } else {
      description = "Unfortunately, you are not a drug dealer.";
      if (data.question3 === "yes") {
        description += " You are involved in drug trafficking.";
      }
      if (data.question4 === "yes") {
        description += ` For assistance, please visit this page: https://www.healthhub.sg/live-healthy/getting_support`;
      }
    }

    // Display the result in a toast
    toast({
      title: `Thank you, ${data.name}`,
      description: description,
    });

    // User info processing
    const isDrugDealer = data.question2 === "yes";
    const isDrugTrafficker = data.question3 === "yes";
    const needHelp = data.question4 === "yes";

    await insertOneUser(data.name, isDrugDealer, isDrugTrafficker, needHelp);
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Drug Awareness Quiz</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormDescription>Please enter your name.</FormDescription>
                <FormControl>
                  <Input placeholder="Your name here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you sell drugs?</FormLabel>
                <FormDescription>Please select an answer.</FormDescription>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you consume drugs?</FormLabel>
                <FormDescription>Please select an answer.</FormDescription>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you need help to quit?</FormLabel>
                <FormDescription>Please select an answer.</FormDescription>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button type="submit" className="w-full max-w-xs">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
