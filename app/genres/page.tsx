import { FocusCards } from '@/components/ui/focus-cards';
import { query } from '@/lib/db';
import { Genre } from '@/types/genre';

// This page is now an async function, which works fine in Next.js (App Router)
const GenrePage = async () => {
  const genres = await query<Genre>('SELECT genre_name as title, 1 as id, imageurl as src FROM genre WHERE active = 1');
  
  return (
    <div className="h-full-10">
      <FocusCards cards={genres} />
    </div>
  );
};

export default GenrePage;