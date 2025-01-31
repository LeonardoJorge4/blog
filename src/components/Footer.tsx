export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border p-4 text-center text-sm text-muted">
      <p>
        &copy; {new Date().getFullYear()} TechRecommends. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
