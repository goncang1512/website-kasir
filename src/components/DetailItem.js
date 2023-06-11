function detailItem(itemId, menuType) {
  return menuData[menuType].map((selectedItems) => {
    return (
      <Modal
        show={showDetail && selectMenuId === itemId}
        onHide={() => setShowDetail(false)}
        className="modal-alert"
        centered
        key={selectedItems.id}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedItems.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src={selectedItems.foto}
            alt=""
          />
          <p className="mt-3" style={{ fontSize: "16px" }}>
            Rp. {selectedItems.harga.toLocaleString()}
          </p>
          <p>{selectedItems.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <input
            className="input-pesanan"
            type="text"
            placeholder="masukkan pesan"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{
              padding: "5px 10px",
              borderRadius: "6px",
              border: "1px solid #007bff",
              outline: "none",
            }}
          />

          <Button
            onClick={() => {
              setShowDetail(false);
              const existingIndex = pesanan.findIndex(
                (item) => item.id === itemId
              );
              if (existingIndex !== -1) {
                const updatedPesanan = [...pesanan];
                updatedPesanan[existingIndex] = {
                  ...updatedPesanan[existingIndex],
                  pesan: inputText,
                };
                setPesanan(updatedPesanan);
              } else {
                const newPesanan = [
                  ...pesanan,
                  { id: itemId, pesan: inputText },
                ];
                setPesanan(newPesanan);
              }

              setInputText("");
            }}
            className="button-pesanan"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  });
}
