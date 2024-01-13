import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const Post = () => {
  return (
    <Card className="sm:w-[320px] md:w-[600px] lg:w-[800px] xl:w-[800px] 2xl:w-[800px] ">
      <CardHeader>Card Header</CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Desc</CardDescription>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  );
};
