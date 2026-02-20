import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export const CheckoutRedirect: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("checkout") === "success") {
      navigate("/checkout-success", { replace: true });
    }
  }, [searchParams, navigate]);

  return null;
};
