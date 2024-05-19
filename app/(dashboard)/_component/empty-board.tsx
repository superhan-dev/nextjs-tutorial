"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { organization } = useOrganization();
  // TODO: DB 전환시 react query 로 변환
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({ orgId: organization.id, title: "Untitled" })
      .then((id) => {
        toast.success("Board created");
        // TODO: Redirect to board/{id}
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/star.svg" alt="Empty" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm my-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size={"lg"} onClick={onClick}>
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
