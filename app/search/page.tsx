"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // useRouter for app directory

const SearchResults: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const q = searchParams.get("q");
    setQuery(q || "");
  }, []);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Here you can add the logic to display the search results based on the query */}
    </div>
  );
};

export default SearchResults;
