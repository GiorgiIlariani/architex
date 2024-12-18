"use client";

import { Button } from "@/components/ui/button";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <Button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`text-[20px] ${
          currentPage === 1 ? "text-[#00000040]" : "text-[#09121F]"
        }`}
      >
        Previous
      </Button>
      <Button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`text-[20px] ${
          currentPage === totalPages ? "text-[#00000040]" : "text-[#09121F]"
        }`}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
