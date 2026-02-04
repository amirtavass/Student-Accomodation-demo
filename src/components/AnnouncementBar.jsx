function AnnouncementBar() {
  return (
    <div className="bg-accent flex flex-col md:flex-row items-center justify-center w-full px-4 py-2 md:py-0 text-center">
      <span>Contracts from 8 weeks now available!</span>
      <a
        href="#"
        className="underline opacity-80 md:ml-2 mt-1 md:mt-0 transition-opacity hover:opacity-100"
      >
        BOOK NOW
      </a>
    </div>
  );
}

export default AnnouncementBar;
