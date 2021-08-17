interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col h-screen max-w-screen-xl mx-auto'>
      <main className='flex-grow p-4'>{children}</main>
    </div>
  );
};

export default Layout;
