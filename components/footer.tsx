import React from "react";
import Link from "next/link";
// @ts-ignore
import TinaIconSvg from "../public/tina.svg";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { Container } from "./container";
import { RawRenderer } from "./rawRenderer";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";

export const Footer = ({ data, icon, rawData }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <footer>
        <div className="flex-wrap p-3 text-center parallax-footer justify-content-center">
          <div className="py-4 m-1 bg-wgray-600 lg:mx-80">
            <p className="text-sm text-rose-50"> GET IN TOUCH </p>
            <p className="text-sm text-rose-100"> MAILING ADDRESS </p>
            <p className="text-xs text-white">
              {" "}
              Asia-Pacific International Univeristy, 18180{" "}
            </p>
            <h6 className="text-sm text-rose-100"> EMAIL ADDRESS </h6>
            <p className="-mt-1">
              <a
                href={data.social.gmail}
                className="text-xs italic text-white hover:text-rose-300"
                target="_blank"
              >
                AZMO
              </a>
            </p>
            <h6 className="text-sm text-rose-100"> SOCIAL MEDIA </h6>
            <div className="flex flex-row justify-center my-1 gap-1">
              {data.social && data.social.twitter && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.twitter}
                  target="_blank"
                >
                  <FaTwitter
                    className={`text-white hover:text-rose-300 h-5 w-auto`}
                  />
                </a>
              )}
              {data.social && data.social.instagram && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.instagram}
                  target="_blank"
                >
                  <FaInstagram
                    className={`text-white hover:text-rose-300 h-5 w-auto`}
                  />
                </a>
              )}

              {data.social && data.social.pinterest && (
                <a
                  className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                  href={data.social.instagram}
                  target="_blank"
                >
                  <FaPinterest
                    className={`text-white hover:text-rose-300 h-5 w-auto`}
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="text-center bg-wgray-600">
          <small className="text-xs text-white">Copyright © 2021</small>
        </div>
      </footer>
    </>
  );
};
