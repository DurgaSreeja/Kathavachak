import React from 'react';
import { Book } from 'lucide-react';

// Mock data for story history
const mockStories = [
  { id: 1, title: "The Lost City", date: "2023-05-01" },
  { id: 2, title: "A Hero's Journey", date: "2023-05-05" },
  { id: 3, title: "The Enchanted Forest", date: "2023-05-10" },
];

const StoryHistory: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <Book className="mr-2" />
        Your Story History
      </h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {mockStories.map((story) => (
            <li key={story.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">{story.title}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        View
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <Book className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        Story
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        Created on <time dateTime={story.date}>{story.date}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StoryHistory;