import { create } from 'zustand';
import { courses, type Course, type Page } from './lib/courses';

interface AppState {
    activeCourseId: string | null;
    currentPageIndex: number;
    htmlCode: string;
    cssCode: string;
    jsCode: string;

    getActiveCourse: () => Course | undefined;
    getActivePage: () => Page | undefined;

    goToNextPage: () => void;
    goToPreviousPage: () => void;

    setHtmlCode: (code: string) => void;
    setCssCode: (code: string) => void;
    setJsCode: (code: string) => void;
    setActiveCourseId: (id: string) => void;
}

const getInitialState = () => {
    const initialCourse = courses[0];
    const initialPage = initialCourse.pages[0];
    return {
        activeCourseId: initialCourse.id,
        currentPageIndex: 0,
        htmlCode: initialPage.initialHtml,
        cssCode: initialPage.initialCss,
        jsCode: initialPage.initialJs,
    };
};

export const useStore = create<AppState>((set, get) => ({
    ...getInitialState(),

    getActiveCourse: () => {
        const { activeCourseId } = get();
        return courses.find(c => c.id === activeCourseId);
    },

    getActivePage: () => {
        const course = get().getActiveCourse();
        const { currentPageIndex } = get();
        return course?.pages[currentPageIndex];
    },

    goToNextPage: () => {
        const course = get().getActiveCourse();
        if (!course) return;
        set(state => {
            const nextPageIndex = Math.min(state.currentPageIndex + 1, course.pages.length - 1);
            const nextPage = course.pages[nextPageIndex];
            return {
                currentPageIndex: nextPageIndex,
                htmlCode: nextPage.initialHtml,
                cssCode: nextPage.initialCss,
                jsCode: nextPage.initialJs,
            };
        });
    },

    goToPreviousPage: () => {
        set(state => {
            const prevPageIndex = Math.max(state.currentPageIndex - 1, 0);
            const course = get().getActiveCourse();
            if (!course) return {};
            const prevPage = course.pages[prevPageIndex];
            return {
                currentPageIndex: prevPageIndex,
                htmlCode: prevPage.initialHtml,
                cssCode: prevPage.initialCss,
                jsCode: prevPage.initialJs,
            };
        });
    },

    setHtmlCode: (code) => set({ htmlCode: code }),
    setCssCode: (code) => set({ cssCode: code }),
    setJsCode: (code) => set({ jsCode: code }),

    setActiveCourseId: (id) => {
        const course = courses.find(c => c.id === id);
        if (course) {
            const firstPage = course.pages[0];
            set({
                activeCourseId: id,
                currentPageIndex: 0,
                htmlCode: firstPage.initialHtml,
                cssCode: firstPage.initialCss,
                jsCode: firstPage.initialJs,
            });
        }
    },
}));
