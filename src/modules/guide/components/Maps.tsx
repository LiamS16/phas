import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/modules/shad/components/ui/dialog";

const Maps = (): JSX.Element => {
  const maps: { name: string; url: string }[] = [
    {
      name: "Bleasdale Farmhouse",
      url: "https://i.imgur.com/rhYpKXc.png",
    },
    {
      name: "Brownstone High School",
      url: "https://i.imgur.com/75yb4O5.png",
    },
    {
      name: "Camp Woodwind",
      url: "https://i.imgur.com/x7kEyM3.png",
    },
    {
      name: "42 Edgefiled Road",
      url: "https://i.imgur.com/u1JoZES.png",
    },
    {
      name: "Grafton Farmhouse",
      url: "https://i.imgur.com/01orZBD.png",
    },
    {
      name: "Maple Lodge Campsite",
      url: "https://i.imgur.com/XXzfdG7.png",
    },
    {
      name: "Prison",
      url: "https://i.imgur.com/VM7Q1a0.png",
    },
    {
      name: "10 Ridgeview Court",
      url: "https://i.imgur.com/MAYVQH7.png",
    },
    {
      name: "Sunny Meadows",
      url: "https://i.imgur.com/9FKzDIH.png",
    },
    {
      name: "6 Tanglewood Drive",
      url: "https://i.imgur.com/EJM7tBR.png",
    },
    {
      name: "13 Willow Street",
      url: "https://i.imgur.com/b5iQnnX.png",
    },
  ];

  return (
    <div className="-mb-4 flex w-full flex-col gap-2 py-2">
      <div className="flex flex-col gap-2">
        {maps.map((m) => (
          <Dialog key={m.name}>
            <DialogTrigger className="w-full rounded border py-1 text-center">
              {m.name}
            </DialogTrigger>
            <DialogContent className="h-max max-h-screen w-full">
              <h1>{m.name}</h1>
              {process.env.NODE_ENV === "production" && (
                <div className="relative h-96 w-full">
                  <Image
                    src={m.url}
                    alt={m.name + " map"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Maps;
