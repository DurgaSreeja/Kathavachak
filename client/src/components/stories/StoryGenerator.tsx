import React, { useState } from 'react';
import { PenTool, Send } from 'lucide-react';

const StoryGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    characters: '',
    setting: '',
    plotPoints: ''
  });

  const { title, characters, setting, plotPoints } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement story generation logic
    console.log('Generate story with:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <PenTool className="mr-2" />
        Generate Your Story
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Story Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="characters" className="block text-sm font-medium text-gray-700">Characters</label>
          <input
            type="text"
            name="characters"
            value={characters}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Separate multiple characters with commas"
          />
        </div>
        <div>
          <label htmlFor="setting" className="block text-sm font-medium text-gray-700">Setting</label>
          <input
            type="text"
            name="setting"
            value={setting}
            onChange={onChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="plotPoints" className="block text-sm font-medium text-gray-700">Plot Points</label>
          <textarea
            name="plotPoints"
            value={plotPoints}
            onChange={onChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter key plot points or story elements"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Send className="mr-2" />
          Generate Story
        </button>
      </form>
    </div>
  );
}

export default StoryGenerator;