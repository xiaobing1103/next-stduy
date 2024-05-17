"use client";
import React, { Key, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
  Tabs,
  Tab,
  Input,
  Button,
} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
export default function Header() {
  const [selected, setSelected] = React.useState<string | any>("login");

  const [fromState, action] = useFormState(actions.LoginUserInfo, {
    message: "",
  });
  const [signFromState, signAction] = useFormState(actions.createUserInfo, {
    message: "",
  });
  const router = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full sm:flex-row mx-auto text-black z-10 bg-slate-600">
      <Navbar>
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            强哥博客
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={router == "/blog"}>
            <Link
              color={router == "/blog" ? "primary" : "foreground"}
              href="/blog"
            >
              博客
            </Link>
          </NavbarItem>
          <NavbarItem isActive={router == "/preform"}>
            <Link
              color={router == "/preform" ? "primary" : "foreground"}
              href="/preform"
            >
              更多
            </Link>
          </NavbarItem>
          <NavbarItem isActive={router == "/goods"}>
            <Link
              color={router == "/goods" ? "primary" : "foreground"}
              href="/goods"
            >
              商品
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" onClick={onOpen}>
              登录
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              注册
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                YYAI欢迎你
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col w-full">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={(key: Key) => setSelected(key)}
                  >
                    <Tab key="login" title="登录">
                      <form
                        className="flex flex-col gap-4"
                        action={(payload) => {
                          action(payload);
                          onClose();
                        }}
                      >
                        <Input
                          isRequired
                          label="用户名/邮箱"
                          type="text"
                          name="userName"
                        />
                        <Input
                          isRequired
                          label="密码"
                          type="password"
                          name="passWord"
                        />
                        <p className="text-center text-small">
                          还没有账户?
                          <Button onClick={() => setSelected("sign-up")}>
                            去注册
                          </Button>
                        </p>
                        {fromState.message && (
                          <div className="my-2 p-2 bg-red-200 border rounded border-red-400 ">
                            {fromState.message}
                          </div>
                        )}
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary" type="submit">
                            登录
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="注册">
                      <form
                        className="flex flex-col gap-4 "
                        action={signAction}
                      >
                        <Input
                          isRequired
                          label="用户名"
                          type="text"
                          name="userName"
                        />
                        <Input
                          isRequired
                          label="邮箱"
                          type="email"
                          name="email"
                        />
                        <Input
                          isRequired
                          label="密码"
                          type="password"
                          name="passWord"
                        />
                        <p className="text-center text-small">
                          已经有账号了?
                          <Button onClick={() => setSelected("login")}>
                            去登录
                          </Button>
                        </p>
                        {signFromState?.message && (
                          <div className="my-2 p-2 bg-red-200 border rounded border-red-400 ">
                            {signFromState.message}
                          </div>
                        )}
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary" type="submit">
                            注册
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
