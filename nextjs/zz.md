(async () => {
  try {
    const response = await (
      await fetch("/apps/wishlist/wishlist/add_product", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          product_id: "9078266069266",
          variant_id: "48068124279058",
          wishlist_id: "123123123",
        }),
      })
    ).json();
  } catch (e) {
    console.error(e);
  }
})();
