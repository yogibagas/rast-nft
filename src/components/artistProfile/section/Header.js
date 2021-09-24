import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profileHeader from "./../../../assets/profile-header.jpg";
import * as MdIcons from "react-icons/md";
import Player from "./Player";
import * as FaIcons from "react-icons/fa";

export default function Header(props) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <div
      className="flex w-full py-16 flex-col bg-cover bg-blend-overlay bg-opacity-25  bg-top text-white  items-center"
      style={{
        backgroundImage: "url(" + profileHeader + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      <div className="mx-auto flex flex-col md:flex-row w-full px-8 md:px-0 md:w-6/12 items-center">
        <div className="profile p-4">
          <LazyLoadImage
            src={props.intro.profile}
            alt={props.user}
            className={`w-full mx-auto`}
            effect="blur"
          />
        </div>
        <div className="music-play flex flex-col space-y-2 flex-grow-1 md:px-8">
          <div className="button flex flex-row text-5xl justify-content-between flex-grow-1 w-full">
            <div className="prev flex-grow-1 text-center">
              <button onClick={props.handlePrevious}>
                <MdIcons.MdSkipPrevious className="stroke-current text-white" />
              </button>
            </div>
            <div className="play flex-grow-1 text-center">
              <Player url={props.intro.music.files} action={'play'}/>
            </div>
            <div className="next flex-grow-1 text-white text-center">
              <button onClick={props.handleNext}>
                <MdIcons.MdSkipNext className="stroke-current text-white" />
              </button>
            </div>
          </div>
          <div className="title flex flex-grow-1">
            <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold text-yellow-rasta capitalize">
              {props.user} - {props.intro.music.title}
            </h1>
          </div>
          <div className="intro-detail hidden md:flex flex-col w-4/12">
            <div className="length grid grid-cols-3">
              <span className="col-span-2 text-white flex-grow-1 uppercase">
                Length
              </span>
              <span className="capitalize">{props.intro.length}</span>
            </div>
          </div>
          <div className="intro-detail hidden md:flex flex-col w-4/12">
            <div className="length grid grid-cols-3">
              <span className="col-span-2 text-white flex-grow-1 uppercase">
                Genre
              </span>
              <span className="capitalize">{props.intro.genre}</span>
            </div>
          </div>
          <div className="intro-detail hidden md:flex flex-col w-4/12">
            <div className="length  grid grid-cols-3">
              <span className="col-span-2 text-white flex-grow-1 uppercase">
                Fund Raised
              </span>
              <span className="capitalize">{props.intro.genre}</span>
            </div>
          </div>
          <div className="intro-detail hidden md:flex flex-col w-4/12">
            <div className="length  grid grid-cols-3">
              <span className="col-span-2 text-white flex-grow-1 uppercase">
                Release
              </span>
              <span className="capitalize">{props.intro.genre}</span>
            </div>
          </div>
          <div className="description w-full pt-4">
            <p className="text-center md:text-left">{props.intro.description}</p>
          </div>
          {props.action === "edit" && (
            <div className="edit-info-btn text-right w-full flex flex-col items-end pt-8">
              <button
                className="bg-white text-black flex flex-row px-4 py-2  rounded-xl space-x-2 items-center"
                onClick={() => setShowModal(true)}
              >
                <span className="icon">
                  <MdIcons.MdEdit />
                </span>
                <span className="text">Edit Song Info</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-rasta pb-8 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                  <h3 className="text-3xl font-semibold">Edit Profile</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col space-y-6">
                  <div className="edit__profile flex flex-col items-center w-full space-y-4">
                    <div className="top__bar flex justify-between w-full">
                      <span className="font-bold text-md text-white">
                        Edit Profile
                      </span>
                      <button className="text-orange-rasta">Edit</button>
                    </div>
                    <div className="image__preview w-full items-center flex">
                      <label htmlFor="upload-button mx-auto">
                        {image.preview ? (
                          <img
                            src={image.preview}
                            alt="dummy"
                            width="300"
                            height="300"
                          />
                        ) : (
                          <>
                            <img
                              src={props.intro.profile}
                              alt="dummy"
                              width="150"
                              height="150"
                            />
                          </>
                        )}

                        <button
                          onClick={handleUpload}
                          className=" relative bottom-8 bg-gray-rasta rounded-full p-2 left-24 ml-4"
                        >
                          <FaIcons.FaCamera />
                        </button>
                      </label>
                      <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="customize__intro flex flex-col w-full space-y-4">
                    <div className="top__bar flex justify-between w-full">
                      <span className="font-bold text-md text-white">
                        Customize Your Intro
                      </span>
                      <button className="text-orange-rasta">Edit</button>
                    </div>
                    <div className="detail__intro grid grid-cols-1 w-8/12">
                      <div className="title flex flex-row flex-grow-1 space-x-8">
                        <span className="font-bold text-white  uppercase label tracking-wide w-5/12">
                          Title
                        </span>
                        <span className="font-bold text-white flex-grow-1 capitalize song__title">
                          Song Title
                        </span>
                      </div>
                      <div className="length flex flex-row flex-grow-1 space-x-8">
                        <span className="font-bold text-white uppercase label tracking-wide w-5/12">
                          Length
                        </span>
                        <span className="font-bold text-white flex-grow-1 capitalize song__title">
                          3:12
                        </span>
                      </div>
                      <div className="genre flex flex-row flex-grow-1 space-x-8">
                        <span className="font-bold text-white  uppercase label tracking-wide w-5/12">
                          Fund Raised
                        </span>
                        <span className="font-bold text-white flex-grow-1 capitalize song__title">
                          Music Video Contribution
                        </span>
                      </div>
                      <div className="fund flex flex-row  flex-grow-1 space-x-8">
                        <span className="font-bold text-white  uppercase label tracking-wide w-5/12">
                          Release
                        </span>
                        <span className="font-bold text-white flex-grow-1 capitalize song__title">
                          1977
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="customize__intro flex flex-col w-full space-y-4">
                    <div className="top__bar flex justify-between w-full">
                      <span className="font-bold text-md text-white">
                        Customize Your Intro
                      </span>
                      <button className="text-orange-rasta">Edit</button>
                    </div>
                    <div className="detail__intro grid grid-cols-1 w-full">
                      <p className="desc text-gray-500 ">
                        {props.intro.description}
                      </p>
                    </div>
                  </div>
                  <div className="social__media flex flex-col w-full space-y-4">
                    <div className="top__bar flex justify-between w-full">
                      <span className="font-bold text-md text-white">
                        Social Media
                      </span>
                    </div>
                    <div className="detail__intro grid grid-cols-1 w-full">
                      <div className="title flex flex-row flex-grow-1 space-x-8">
                        <span className="font-bold text-gray-500  uppercase label tracking-wide w-5/12">
                          Facebook
                        </span>
                        <span className="font-bold text-gray-500  flex-grow-1 capitalize song__title">
                          Song Title
                        </span>
                      </div>
                      <div className="length flex flex-row flex-grow-1 space-x-8">
                        <span className="font-bold text-gray-500  uppercase label tracking-wide w-5/12">
                          Length
                        </span>
                        <span className="font-bold text-gray-500  flex-grow-1 capitalize song__title">
                          3:12
                        </span>
                      </div>
                      <div className="genre flex flex-row flex-grow-1 space-x-8">
                        <span className="font-bold text-gray-500   uppercase label tracking-wide w-5/12">
                          Fund Raised
                        </span>
                        <span className="font-bold text-gray-500  flex-grow-1 capitalize song__title">
                          Music Video Contribution
                        </span>
                      </div>
                      <div className="fund flex flex-row  flex-grow-1 space-x-8">
                        <span className="font-bold text-gray-500   uppercase label tracking-wide w-5/12">
                          Release
                        </span>
                        <span className="font-bold text-gray-500  flex-grow-1 capitalize song__title">
                          1977
                        </span>
                      </div>
                    </div>
                    <div className="button w-full flex items-center">
                      <button className="w-full bg-gradient-to-r from-yellow-rasta to-green-rasta rounded-md py-2">
                        DONE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
