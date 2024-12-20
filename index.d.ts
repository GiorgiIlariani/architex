declare interface HomeCardTypes {
  image: string;
  title: string;
  text: string;
}

declare interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

declare interface ConfirmDialogProps {
  trigger: ReactNode;
  content: ReactNode;
  onConfirm: () => void;
}

declare interface ProfileResultCardProps {
  id: number;
  coordinates: string;
  isSaved: boolean;
  img: string;
  label: string[];
  showAllLabels: boolean;
  searchResultPage: boolean;
}
