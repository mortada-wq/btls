import { useState } from 'react';
import { Slider } from './ui/slider';

export function PromptBar() {
  const [sliderValues, setSliderValues] = useState({
    slider1: [70],
    slider2: [50],
    slider3: [60],
  });

  const [promptText, setPromptText] = useState('');

  return (
    <div className="space-y-5 md:space-y-8 w-full max-w-[90%] mx-auto">
      {/* Tagline with Logo Icon */}
      <div className="flex items-start gap-3 md:gap-4">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 168.71 163.77" className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
  <defs>
    <style>
      {`.cls-1 {
        fill: url(#linear-gradient);
      }`}
    </style>
    <linearGradient id="linear-gradient" x1="0" y1="81.88" x2="168.71" y2="81.88" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#275f7d"/>
      <stop offset=".58" stopColor="#2d6f8f"/>
      <stop offset="1" stopColor="#3689a4"/>
    </linearGradient>
  </defs>
  <path className="cls-1" d="M159.5,12.94c-2.94-3.26-6.14-5-9.57-5.11h-.27c-5.76-.76-9.78.33-12.34,1.41-9.29,3.86-12.66,13.21-18.48,12.34-1.79-.27-3.1-1.41-3.86-2.17-1.41-1.79-3.15-3.37-4.95-4.84-.05-.05-.16-.05-.16-.05h0c-2.07-1.68-4.24-3.21-6.63-4.51h0c-.43-.27-.82-.49-1.25-.71-.98-.49-1.85-.98-2.83-1.36-5.27-2.61-10.71-4.46-16.41-5.76-2.72-.6-5.38-1.03-7.99-1.36-3.8-.54-7.61-.82-11.2-.82-9.62,0-18.86,1.85-27.61,5.6-8.75,3.75-15.87,9.02-21.36,15.93-5.54,6.9-8.26,15.22-8.26,25.06,0,8.7,1.68,15.87,5.05,21.58,3.37,5.65,7.66,10.27,12.99,13.75,5.27,3.42,11.14,6.2,17.56,8.42,6.36,2.12,12.61,4.08,18.7,5.87,5.87,1.58,11.25,3.26,16.03,5,4.84,1.79,8.75,3.97,11.69,6.47,2.94,2.61,4.46,6.03,4.46,10.38,0,5.11-1.36,8.86-3.97,11.36-2.66,2.45-5.82,4.02-9.29,4.73-3.53.71-6.85,1.14-9.78,1.36-9.4,0-17.34-1.58-23.64-4.78-6.3-3.15-12.28-7.5-17.99-13.26-3.37-3.37-6.85-5.22-10.33-5.49-3.53-.27-6.9.54-10.06,2.5C2.86,117.62.25,121.37.03,125.66c-.22,4.29.71,7.88,2.66,10.6,7.72,10.27,17.34,17.39,28.97,21.47,11.63,4.02,23.15,6.03,34.79,6.03,9.29,0,18.32-1.79,27.18-5.49,8.81-3.64,16.2-8.97,22.12-16.03,5.87-7.12,8.81-15.65,8.81-25.71,0-1.09,0-2.12-.05-3.21-.33-7.23-1.9-13.26-4.62-18.15-3.15-5.6-7.23-10.16-12.34-13.75-5.11-3.59-10.71-6.41-16.8-8.53-6.14-2.17-12.07-4.02-18.05-5.6-5.65-1.58-11.09-3.21-16.03-4.89-5.05-1.63-9.02-3.8-11.96-6.47-2.94-2.66-4.46-6.2-4.46-10.71,0-4.89,1.3-8.53,3.8-10.82,2.5-2.23,5.54-3.75,9.02-4.46,3.42-.71,6.63-1.03,9.57-1.03,7.28,0,13.75,1.3,19.35,3.8,2.72,1.3,5.27,2.72,7.45,4.46.05,0,.16.05.16.05,2.17,2.83,4.62,5.33,7.28,7.56,6.2,5.22,13.32,7.39,21.2,6.47,5.33-.6,9.78-2.07,13.37-4.35.6-.6,5.76-6.25,10.87-11.2.76-.76,2.39-2.34,4.78-2.83.71-.16,1.41-.22,2.17-.16,1.03,0,2.12.33,3.37.98,1.14.71,2.17,1.96,2.99,3.97.87,1.96,1.25,5.05,1.03,9.29-.16,3.91-.76,6.96-1.85,9.13-1.14,2.23-2.66,4.08-4.46,5.49-1.85,1.36-3.8,2.66-5.87,3.97-2.12,1.3-4.29,2.83-6.58,4.57-2.17,1.79-4.29,4.19-6.2,7.12-1.9,2.99-3.48,6.9-4.78,11.69-1.3,4.78-2.07,10.87-2.34,18.32-.05,2.12-.05,4.19,0,6.14.16,6.03.98,11.36,2.34,15.98,1.85,6.14,4.29,10.87,7.28,14.08,3.1,3.26,6.2,4.89,9.51,5.05,4.08.16,8.26-1.41,12.5-4.73,4.24-3.37,7.88-9.35,10.87-18.05.82-2.34,1.25-5.38,1.3-9.08.05-3.7-.76-6.96-2.39-9.67-1.03-1.79-2.17-2.5-3.48-2.34-1.25.22-2.55,1.68-3.8,4.57-2.17,4.84-4.46,8.53-6.74,11.14-2.34,2.66-5.11,3.91-8.48,3.75-1.09-.22-2.17-.6-3.42-1.25-1.25-.6-2.34-2.07-3.15-4.19-.38-.98-1.74-4.35-1.09-9.84.33-2.61,1.09-9.51,6.2-14.19.11-.11,1.96-1.52,5.87-4.08,2.17-1.41,4.46-3.1,6.85-4.84,2.34-1.79,4.46-4.08,6.41-6.96,1.96-2.94,3.7-6.74,5.05-11.63,1.36-4.89,2.17-11.09,2.39-18.43.33-8.48-.43-15.71-2.12-21.63-1.68-6.03-4.08-10.65-7.12-14.02l.11-.11Z"/>
</svg>
        <div>
          <p className="text-slate-800 text-sm md:text-base leading-tight">
            No more "on behalf of".
          </p>
          <p className="text-slate-900 text-xl md:text-2xl leading-tight mt-1">
            Let your products say what they are.
          </p>
        </div>
      </div>

      {/* Prompt Bar with Sliders */}
      <div className="relative bg-gradient-to-b from-gray-300 to-gray-400 rounded-[3rem] p-1 shadow-lg">
        <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-[2.8rem] p-4 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
          {/* Text Input Area */}
          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder=""
            className="flex-1 w-full bg-transparent border-none outline-none text-slate-700 text-base md:text-lg placeholder:text-slate-400"
          />

          {/* Sliders on the Right */}
          <div className="flex sm:flex-col gap-2 md:gap-3 w-full sm:w-24 md:w-32">
            <Slider
              value={sliderValues.slider1}
              onValueChange={(value) => setSliderValues({ ...sliderValues, slider1: value })}
              max={100}
              step={1}
              className="w-full"
            />
            <Slider
              value={sliderValues.slider2}
              onValueChange={(value) => setSliderValues({ ...sliderValues, slider2: value })}
              max={100}
              step={1}
              className="w-full"
            />
            <Slider
              value={sliderValues.slider3}
              onValueChange={(value) => setSliderValues({ ...sliderValues, slider3: value })}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Action Row: wraps on larger viewports and scrolls on smaller ones */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:flex-wrap">
        <button
          type="button"
          aria-label="Send"
          className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-sm"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="shrink-0 rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-semibold text-slate-900"
        >
          زد
        </button>
        <button
          type="button"
          className="shrink-0 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm text-slate-800"
        >
          Dynamic Bubbles
        </button>
        <button
          type="button"
          className="shrink-0 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm text-slate-800"
        >
          Quick Actions
        </button>
      </div>
    </div>
  );
}
