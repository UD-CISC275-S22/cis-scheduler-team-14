import { useState } from "react";

/** A search tab to search for a certain course within the given course catalog */
export function CourseFinder(): JSX.Element {
    const [query, setQuery] = useState<string>("");
    const [queryType, setQueryType] = useState<string>("id");
    const [results, setResults] = useState<Course[]>();
}
