export default function Comp3Props({ name }: { name: string }) {
  return (
    <div style={{padding: 3, marginTop: 3, background: 'yellow'}}>
      <h3>Hello {name}</h3>
    </div>
  );
}