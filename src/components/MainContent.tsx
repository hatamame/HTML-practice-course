import React from 'react';
import { useStore } from '../store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const MainContent: React.FC = () => {
  const { 
    getActiveCourse, 
    getActivePage, 
    currentPageIndex, 
    goToNextPage, 
    goToPreviousPage 
  } = useStore();

  const course = getActiveCourse();
  const page = getActivePage();

  if (!course || !page) {
    return (
      <div className="p-6 h-full flex items-center justify-center">
        <p>左のメニューからコースを選択してください。</p>
      </div>
    );
  }

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === course.pages.length - 1;

  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <Card>
          <CardHeader>
            <p className="text-sm text-muted-foreground">{course.title}</p>
            <CardTitle className="text-3xl">{page.title}</CardTitle>
            <CardDescription>{page.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mt-6 mb-3">演習問題</h3>
            <div className="p-4 bg-muted rounded-lg">
              <p>{page.exercise}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Button variant="outline" onClick={goToPreviousPage} disabled={isFirstPage}>
              <ArrowLeft className="mr-2 h-4 w-4" /> 前へ
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentPageIndex + 1} / {course.pages.length}
            </span>
            <Button variant="outline" onClick={goToNextPage} disabled={isLastPage}>
              次へ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  );
};
