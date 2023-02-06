import { Paginate } from "./styled";

export const Pagination = ({ setPage }: any) => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Paginate>
        {item.map((item: number, index: number) => (
          <div className="itemIndex" key={index} onClick={() => setPage(item)}>
            {item}
          </div>
        ))}
      </Paginate>
    </>
  );
};
