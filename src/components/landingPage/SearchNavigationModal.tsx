import ModalSearch from '../UI/SearchModal';

export type Data = {
  id: number;
  patientFullName: string;
  phoneNumber: string;
  email: string;
  position: string;
  doctorFullName: string;
  dateAndTime: string;
  status: string;
};

export type SearchResult = {
  search: string;
  status: keyof Data;
};

type SearchType = {
  searchWord: string;
  dataArr: Data[];
  inputValue: string;
};

const SearchNavigationModal = ({
  searchWord,
  dataArr,
  inputValue,
}: SearchType) => {
  const normalizedQuery = searchWord.toLowerCase();

  const fieldsToSearch: (keyof Data)[] = ['position', 'doctorFullName'];

  const results: SearchResult[] = [];
  const seenValues = new Set<string>();

  dataArr.forEach(item => {
    fieldsToSearch.forEach(field => {
      const value = item[field];
      if (
        typeof value === 'string' &&
        value.toLowerCase().includes(normalizedQuery) &&
        !seenValues.has(value)
      ) {
        seenValues.add(value);
        results.push({ search: value, status: field });
      }
    });
  });

  return <ModalSearch data={results} inputValue={inputValue} />;
};

export default SearchNavigationModal;
