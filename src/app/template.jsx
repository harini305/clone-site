/** Re-mounts on every navigation, so each page fades in (see .page-enter). */
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
