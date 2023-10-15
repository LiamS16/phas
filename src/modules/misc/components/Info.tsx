import React from "react";
import { Info as InfoIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/modules/shad/components/ui/dialog";
import Link from "next/link";

const Info = (): JSX.Element => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mx-auto mb-3 flex items-center justify-center gap-2 text-sm hover:text-slate-400">
          <InfoIcon className="h-4 w-4" />
          Info
        </button>
      </DialogTrigger>
      <DialogContent className="h-5/6 overflow-y-scroll">
        <h1>Copyright</h1>
        <div className="-mt-2 flex flex-col gap-2 rounded border bg-black p-4 font-mono text-xs">
          <p>
            This website, located at https://phas-guide.vercel.app/ (referred to
            as the {"Website"}), is a fan-made guide for the popular game
            Phasmophobia. The information and content provided on this Website
            are intended for informational and educational purposes only.
          </p>
          <h2>Not an Official Source:</h2>
          <p>
            This Website is not affiliated with, endorsed by, or officially
            associated with the creators or developers of Phasmophobia or
            Kinetic Games. It is an independent project created by Liam Shaw, a
            fan of the game.
          </p>
          <h2>Data Sources:</h2>
          <p>
            All data and information presented on this Website have been sourced
            from publicly available content. The primary sources for information
            are the content creator{" "}
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UC5uNya42ayhsRnZOR3mO6NA"
              className="underline hover:cursor-pointer"
            >
              INSYM
            </Link>
            , and the official{" "}
            <Link
              target="_blank"
              href="https://discord.gg/phasmophobia"
              className="underline hover:cursor-pointer"
            >
              Phasmophobia Discord server
            </Link>
            .
          </p>
          <h2>Accuracy and Reliability:</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we
            cannot guarantee the accuracy, completeness, or reliability of the
            content presented on this Website. Users should verify information
            independently if accuracy is critical.
          </p>
          <h2>Contact Information:</h2>
          <p>
            For inquiries or concerns regarding this Website, you can reach out
            to us through our{" "}
            <Link
              target="_blank"
              href="https://discord.gg/utKyzy7umT"
              className="underline hover:cursor-pointer"
            >
              Discord server
            </Link>
            .
          </p>
          <h2>User Responsibility:</h2>
          <p>
            Users of this Website are responsible for their actions and
            decisions made based on the information provided. We are not liable
            for any consequences resulting from the use of information found on
            this Website.
          </p>
          <h2>Changes and Updates:</h2>
          <p>
            We may modify, update, or remove content from this Website without
            notice. It is the {"user's"} responsibility to stay informed about
            any changes. By using this Website, you agree to and accept the
            terms and conditions outlined in this disclaimer. If you do not
            agree with any part of this disclaimer, please refrain from using
            this Website.
          </p>
          <h3>Last updated: 11 October 2023</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Info;
