"use client";

import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: React.ReactNode;
}

interface RootResponsiveSheetProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ResponsiveSheetProps extends BaseProps {
  className?: string;
  asChild?: true;
}

const ResponsiveSheetContext = React.createContext<{ isDesktop: boolean }>({
  isDesktop: false,
});

const useResponsiveSheetContext = () => {
  const context = React.useContext(ResponsiveSheetContext);
  if (!context) {
    throw new Error(
      "ResponsiveSheet components cannot be rendered outside the ResponsiveSheet Context",
    );
  }
  return context;
};

const ResponsiveSheet = ({ children, ...props }: RootResponsiveSheetProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const Component = isDesktop ? Sheet : Drawer;

  return (
    <ResponsiveSheetContext.Provider value={{ isDesktop }}>
      <Component {...props} {...(!isDesktop && { autoFocus: true })}>
        {children}
      </Component>
    </ResponsiveSheetContext.Provider>
  );
};

const ResponsiveSheetTrigger = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Trigger = isDesktop ? SheetTrigger : DrawerTrigger;

  return (
    <Trigger className={className} {...props}>
      {children}
    </Trigger>
  );
};

const ResponsiveSheetClose = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Close = isDesktop ? SheetClose : DrawerClose;

  return (
    <Close className={className} {...props}>
      {children}
    </Close>
  );
};

const ResponsiveSheetContent = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Content = isDesktop ? SheetContent : DrawerContent;

  return (
    <Content className={className} {...props}>
      {children}
    </Content>
  );
};

const ResponsiveSheetDescription = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Description = isDesktop ? SheetDescription : DrawerDescription;

  return (
    <Description className={className} {...props}>
      {children}
    </Description>
  );
};

const ResponsiveSheetHeader = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Header = isDesktop ? SheetHeader : DrawerHeader;

  return (
    <Header className={className} {...props}>
      {children}
    </Header>
  );
};

const ResponsiveSheetTitle = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Title = isDesktop ? SheetTitle : DrawerTitle;

  return (
    <Title className={className} {...props}>
      {children}
    </Title>
  );
};

const ResponsiveSheetBody = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const ResponsiveSheetFooter = ({
  className,
  children,
  ...props
}: ResponsiveSheetProps) => {
  const { isDesktop } = useResponsiveSheetContext();
  const Footer = isDesktop ? SheetFooter : DrawerFooter;

  return (
    <Footer className={className} {...props}>
      {children}
    </Footer>
  );
};

export {
  ResponsiveSheet,
  ResponsiveSheetBody,
  ResponsiveSheetClose,
  ResponsiveSheetContent,
  ResponsiveSheetDescription,
  ResponsiveSheetFooter,
  ResponsiveSheetHeader,
  ResponsiveSheetTitle,
  ResponsiveSheetTrigger,
};
