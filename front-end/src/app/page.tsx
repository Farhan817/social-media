import FeedList from "./_components/feed/FeedPage";
import Login from "./_components/login/Login";
import { BottomTabBar } from "./_components/ui/BottomTabs";
import  Header  from "./_components/ui/Header";

export default function Home() {

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <main className="max-w-md mx-auto py-6 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-bold px-4 mb-4">Feed</h1>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
          <Header  />
          <div className="flex-1 pb-16 min-w-full">
            <FeedList />
          </div>
          {/* <BottomTabBar /> */}
        </div>
      </main>
    // </div>
  );
}
