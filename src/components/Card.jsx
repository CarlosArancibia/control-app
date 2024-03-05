/* eslint-disable react/prop-types */
export const Card = ({ title, duplicates }) => {
  return (
    <article
      className={`h-full bg-[#1E242C] rounded-lg w-full border-${
        duplicates ? 'orange' : 'teal'
      }-500 border-t-8 p-5`}
    >
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-400">{duplicates ? 'Hay duplicados' : 'No hay duplicados'}</p>
      {duplicates && (
        <div className="mt-5 ">
          <ul className="pl-5 text-gray-400">
            <li>La forma CCBANDIR ya esta siendo utilizada por Carlos en el FSN 1348</li>
          </ul>
        </div>
      )}
    </article>
  );
};
