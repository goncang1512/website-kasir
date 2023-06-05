import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Alert } from "react-bootstrap";
import "./components.css";
import dataBase from "../database";

//   menu makanan

export default function Dasbord() {
  // style css
  const dasbordStyle = {
    columnMid: {
      backgroundColor: "#fff",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "37px",
    },
    columnRight: {
      backgroundColor: "white",
      justifyContent: "start",
      alignItems: "center",
      paddingTop: "30px",
      flexDirection: "column",
      height: "100vh",
      paddingBottom: "20px",
    },
    columnLeft: {
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "33px",
    },
  };

  // halal
  const [menuType, setMenuType] = useState("food"); // state untuk menentukan jenis menu yang ditampilkan

  // Fungsi untuk mengubah jenis menu
  const tekanMenuType = (type) => {
    setMenuType(type);
  };

  // pesanan
  const [pesanan, setPesanan] = useState([]);
  const tambahPesanan = (item) => {
    const existingItem = pesanan.find((p) => p.id === item.id);
    if (existingItem) {
      const updatedPesanan = pesanan.map((p) =>
        p.id === item.id ? { ...p, jumlah: p.jumlah + 1 } : p
      );
      setPesanan(updatedPesanan);
    } else {
      setPesanan((prevPesanan) => [...prevPesanan, { ...item, jumlah: 1 }]);
    }
  };

  // hapus pesanan
  const hapusPesanan = (id) => {
    const updatedPesanan = pesanan.map((item) =>
      item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
    );
    setPesanan(updatedPesanan.filter((item) => item.jumlah > 0));
  };

  // Fungsi untuk menghapus semua pesanan
  const hapusSemuaPesanan = () => {
    setPesanan([]); // Mengatur state pesanan menjadi array kosong
  };

  // jumlah pesanan
  const hitungJumlahPesanan = (id) => {
    let jumlah = 0;
    pesanan.forEach((item) => {
      if (item.id === id) {
        jumlah += item.jumlah;
      }
    });
    return jumlah;
  };

  // total harga
  const [totalHarga, setTotalHarga] = useState(0);
  const hitungTotalHarga = () => {
    let total = 0;
    pesanan.forEach((item) => {
      total += item.harga * item.jumlah;
    });
    return total;
  };

  useEffect(() => {
    const total = hitungTotalHarga();
    setTotalHarga(total);
  }, [pesanan]);

  // Alert sukses
  const [showAlert, setShowAlert] = useState(false);
  const [currentTotalHarga, setCurrentTotalHarga] = useState("");

  function alertSukses() {
    return (
      <Modal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        className="modal-alert"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Pembayaran Sukses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success">
            Telah berhasil dibayar! Total bayar: Rp. {""}
            {currentTotalHarga.toLocaleString()}
          </Alert>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div>
      <Container fluid style={{ backgroundColor: "White", color: "white" }}>
        <Row className="d-flex" style={{}}>
          {/* colum left */}
          <Col
            xs={12}
            lg={2}
            md={9}
            className="d-flex"
            style={dasbordStyle.columnLeft}
          >
            <h1 style={{ fontSize: "25px", color: "black" }}>Kategori Menu</h1>
            <hr className="hr-left" />
            <Card
              style={{
                margin: "0px 0px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <ul
                className="list-group"
                style={{ listStyle: "none", gap: "20px" }}
              >
                <li>
                  <a href="#food" onClick={() => tekanMenuType("food")}>
                    Makanan
                  </a>
                </li>
                <li>
                  <a href="#drink" onClick={() => tekanMenuType("drink")}>
                    Minuman
                  </a>
                </li>
                <li>
                  <a href="#snack" onClick={() => tekanMenuType("snack")}>
                    Snack
                  </a>
                </li>
              </ul>
            </Card>
          </Col>

          {/* colunm mid */}
          <Col xs={12} lg={7} md={3} style={dasbordStyle.columnMid}>
            <h1
              style={{
                fontSize: "30px",
                color: "black",
                textAlign: "center",
              }}
            >
              Daftar Menu
            </h1>
            <hr className="hr-left" />
            <Row
              className="d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                positon: "relative",
                marginBottom: "30px",
              }}
            >
              {/* food lunch */}
              {menuType === "food" &&
                dataBase.foodLunch.map((food) => {
                  return (
                    <Card
                      className="d-flex card-menu"
                      style={{
                        width: "18rem",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                      onClick={() => tambahPesanan(food)}
                    >
                      <Card.Img
                        className="img-card"
                        src={food.foto}
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          top: "0",
                          left: "0",
                          position: "absolute",
                          transition: "0.5s all ease",
                        }}
                      />
                      <Card.Body style={{ paddingTop: "95%" }}>
                        <Card.Title>
                          {food.name} {food.kode}
                        </Card.Title>
                        <Card.Text>
                          Rp. {food.harga.toLocaleString()}{" "}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}

              {/* Drink lunch */}
              {menuType === "drink" &&
                dataBase.drinkLunch.map((drink) => {
                  return (
                    <Card
                      className="d-flex card-menu"
                      style={{
                        width: "18rem",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                      onClick={() => tambahPesanan(drink)}
                    >
                      <Card.Img
                        className="img-card"
                        src={drink.foto}
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          top: "0",
                          left: "0",
                          position: "absolute",
                          transition: "0.5s all ease",
                        }}
                      />
                      <Card.Body style={{ paddingTop: "95%" }}>
                        <Card.Title>
                          {drink.name} {drink.kode}
                        </Card.Title>
                        <Card.Text>
                          Rp. {drink.harga.toLocaleString()}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}

              {/* Snack lunch */}
              {menuType === "snack" &&
                dataBase.snackLunch.map((snack) => {
                  return (
                    <Card
                      className="d-flex card-menu"
                      style={{
                        width: "18rem",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                      onClick={() => tambahPesanan(snack)}
                    >
                      <Card.Img
                        className="img-card"
                        src={snack.foto}
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          top: "0",
                          left: "0",
                          position: "absolute",
                          transition: "0.5s all ease",
                        }}
                      />
                      <Card.Body style={{ paddingTop: "95%" }}>
                        <Card.Title>
                          {snack.name} {snack.kode}
                        </Card.Title>
                        <Card.Text>
                          Rp. {snack.harga.toLocaleString()}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
            </Row>
          </Col>

          {/* column right */}
          <Col
            xs={12}
            lg={3}
            className="d-flex"
            style={dasbordStyle.columnRight}
          >
            <h1 style={{ fontSize: "30px", color: "black" }}>Pesanan</h1>
            <hr className="hr-left" />
            <Row
              className="d-flex"
              style={{
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {pesanan.map((item) => (
                <Card key={item.id}>
                  <Card.Img
                    src={item.foto}
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      top: "0",
                      left: "0",
                      position: "absolute",
                    }}
                  />
                  <Card.Body style={{ paddingTop: "90%" }}>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Rp. {(item.harga * item.jumlah).toLocaleString()}
                    </Card.Text>
                    <Card.Text>
                      Jumlah: {hitungJumlahPesanan(item.id)}
                    </Card.Text>
                    <button
                      className="bg-danger"
                      onClick={() => hapusPesanan(item.id)}
                      style={{
                        borderRadius: "7px",
                        padding: "3px 5px",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Hapus
                    </button>
                  </Card.Body>
                </Card>
              ))}
              {alertSukses()}
              <Card
                className="bg-success"
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  width: "100%",
                  color: "white",
                  cursor: pesanan.length > 0 ? "pointer" : "default",
                }}
                onClick={() => {
                  if (pesanan.length > 0) {
                    hapusSemuaPesanan();
                    setShowAlert(true);
                    setCurrentTotalHarga(totalHarga.toLocaleString());
                  }
                }}
                disabled={pesanan.length === 0}
              >
                Total Harga: Rp. {totalHarga.toLocaleString()}
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
