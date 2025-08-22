import React from 'react';
import { useStore } from '../store';
import { courses } from '../lib/courses';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Sidebar: React.FC = () => {
  const { activeCourseId, setActiveCourseId } = useStore();

  const chapters = courses.reduce((acc, course) => {
    if (!acc[course.chapter]) {
      acc[course.chapter] = [];
    }
    acc[course.chapter].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  return (
    <div className="flex flex-col h-full p-4 bg-muted/40">
      <h2 className="text-2xl font-bold mb-4 flex-shrink-0">コース一覧</h2>
      {/* 残りのスペースを埋めるためのラッパーを追加
      */}
      <div className="flex-grow overflow-hidden">
        <ScrollArea className="h-full">
          <div className="space-y-4 pr-4"> {/* スクロールバーのスペースを考慮して右にパディングを追加 */}
            {Object.entries(chapters).map(([chapter, coursesInChapter]) => (
              <div key={chapter}>
                <h3 className="text-lg font-semibold mb-2 text-muted-foreground">{chapter}</h3>
                <div className="space-y-1">
                  {coursesInChapter.map((course) => (
                    <Button
                      key={course.id}
                      variant={activeCourseId === course.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveCourseId(course.id)}
                    >
                      {course.title}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
