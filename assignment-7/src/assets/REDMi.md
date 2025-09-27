1. What is JSX, and why is it used?

ans: JSX (JavaScript XML) হলো React এ ব্যবহৃত একটি সিনট্যাক্স এক্সটেনশন, যা JavaScript এর ভেতরে HTML-এর মতো কোড লিখতে দেয়।

2. What is the difference between State and Props?

ans: State হলো component এর ভেতরের data, যেটা পরিবর্তনযোগ্য।
Props হলো component এ parent থেকে পাঠানো data, যেটা পরিবর্তন করা যায় না।

3. What is the useState hook, and how does it work?
   ans: useState হলো React এর একটি Hook, যেটা দিয়ে আমরা component এ state তৈরি এবং update করতে পারি।

4. How can you share state between components in React?
   ans: React এ state share করার উপায়ঃ

Lifting State Up → common parent component এ state রাখা হয়, তারপর props এর মাধ্যমে নিচের child component গুলোতে পাঠানো হয়।

5. How is event handling done in React?
   ans: React এ event handling করা হয় JavaScript এর মতো, তবে camelCase সিনট্যাক্স দিয়ে।
