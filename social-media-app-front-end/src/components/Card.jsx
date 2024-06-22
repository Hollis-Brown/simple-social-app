export default function Card({children,noPadding}) {
  let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5 mt-5 rounded-md overflow-hidden';
  if (!noPadding) {
    classes += ' p-4';
  }
  return (
    <div className={classes}>
      {children}
    </div>
  );
}