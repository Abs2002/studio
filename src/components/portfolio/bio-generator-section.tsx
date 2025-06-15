"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBio, type GenerateBioInput, type GenerateBioOutput } from '@/ai/flows/generate-bio';
import Section from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const bioGeneratorSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  profession: z.string().min(3, { message: "Profession must be at least 3 characters." }),
  skills: z.string().min(5, { message: "Please list some skills." }),
  experience: z.string().min(10, { message: "Experience summary must be at least 10 characters." }),
  style: z.enum(['formal', 'casual', 'creative']),
});

type BioGeneratorFormValues = z.infer<typeof bioGeneratorSchema>;

export default function BioGeneratorSection() {
  const [generatedBio, setGeneratedBio] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<BioGeneratorFormValues>({
    resolver: zodResolver(bioGeneratorSchema),
    defaultValues: {
      name: '',
      profession: '',
      skills: '',
      experience: '',
      style: 'casual',
    },
  });

  const onSubmit: SubmitHandler<BioGeneratorFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedBio(null);
    try {
      const result: GenerateBioOutput = await generateBio(data);
      setGeneratedBio(result.bio);
      toast({
        title: "Bio Generated Successfully!",
        description: "Your new professional bio is ready.",
      });
    } catch (error) {
      console.error("Error generating bio:", error);
      toast({
        variant: "destructive",
        title: "Error Generating Bio",
        description: (error as Error).message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="bio-generator" title="AI Bio Generator" icon={Sparkles} className="bg-muted/50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Craft Your Bio</CardTitle>
            <CardDescription>Fill in your details and let AI create a professional bio for you.</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Full Name</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="e.g., Alex Persona" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                   control={form.control}
                   name="profession"
                   render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="profession">Profession/Job Title</FormLabel>
                       <FormControl>
                        <Input id="profession" placeholder="e.g., Software Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="skills">Key Skills (comma-separated)</FormLabel>
                      <FormControl>
                        <Input id="skills" placeholder="e.g., React, Node.js, Python" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="experience">Brief Experience Summary</FormLabel>
                       <FormControl>
                        <Textarea id="experience" placeholder="e.g., 5 years developing web apps..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="style"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="style">Bio Style</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger id="style">
                            <SelectValue placeholder="Select bio style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="creative">Creative</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Bio
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        <Card className="shadow-lg min-h-[300px]">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Your Generated Bio</CardTitle>
            <CardDescription>The AI-crafted bio will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                <p>Generating your bio, please wait...</p>
              </div>
            )}
            {generatedBio && !isLoading && (
              <div className="prose prose-sm max-w-none p-4 bg-accent/30 rounded-md border border-accent">
                <p className="text-foreground/90 whitespace-pre-line">{generatedBio}</p>
              </div>
            )}
            {!generatedBio && !isLoading && (
              <p className="text-muted-foreground italic text-center py-8">
                Your generated bio will be displayed here once you submit the form.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
