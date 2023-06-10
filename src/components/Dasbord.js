import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Alert,
  Button,
} from "react-bootstrap";
import "./components.css";
import dataMenu from "../datamenu";

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
    imgMenu: {
      width: "100%",
      objectFit: "contain",
      top: "0",
      left: "0",
      position: "absolute",
      transition: "0.5s all ease",
      marginTop: "47px",
    },
    bodyName: {
      backgroundColor: "#11A662",
      width: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      height: "50px",
      zIndex: "2",
      color: "white",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
    },
  };

  // halaman awal pada menu categori
  const [menuType, setMenuType] = useState("appetizer"); // state untuk menentukan jenis menu yang ditampilkan

  // Fungsi untuk mengubah jenis menu
  const tekanMenuType = (type) => {
    setMenuType(type);
  };

  const menuTypes = [
    { type: "appetizer", label: "Appetizer" },
    { type: "main", label: "Main Course" },
    { type: "sea", label: "Seafood" },
    { type: "dessert", label: "Dessert" },
    { type: "fast", label: "Fast Food" },
  ];

  const menuItems = menuTypes.map((menu) => (
    <li className={menuType === menu.type ? "aktif" : ""} key={menu.type}>
      <a
        href={`#${menu.type}`}
        onClick={() => {
          tekanMenuType(menu.type);
        }}
      >
        <span
          style={{
            color: menuType === menu.type ? "white" : "inherit",
          }}
        >
          {menu.label}
        </span>
      </a>
    </li>
  ));

  // pesanan
  const [pesanan, setPesanan] = useState([]);
  // tambah pesanan
  const tambahPesanan = (item, pesan) => {
    const existingItem = pesanan.find(
      (p) => p.id === item.id && p.pesan === pesan
    );

    if (existingItem) {
      const updatedPesanan = pesanan.map((p) => {
        if (p.id === item.id && p.pesan === pesan) {
          return { ...p, jumlah: p.jumlah + 1 };
        } else {
          return p;
        }
      });
      setPesanan(updatedPesanan);
      return;
    }

    const existingItemWithSameId = pesanan.find((p) => p.id === item.id);

    if (existingItemWithSameId) {
      const updatedPesanan = pesanan.map((p) =>
        p.id === item.id ? { ...p, jumlah: p.jumlah + 1 } : p
      );
      setPesanan(updatedPesanan);
      return;
    }

    const existingItemWithDifferentPesan = pesanan.find(
      (p) => p.id === item.id && p.pesan !== pesan
    );

    const updatedPesanan = existingItemWithDifferentPesan
      ? pesanan.map((p) =>
          p.id === item.id && p.pesan !== pesan
            ? p
            : { ...p, jumlah: p.jumlah + 1 }
        )
      : [...pesanan, { ...item, jumlah: 1, pesan }];

    setPesanan(updatedPesanan);
  };

  // hapus pesanan
  const hapusPesanan = (id) => {
    const updatedPesanan = pesanan.map((item) =>
      item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
    );
    setPesanan(updatedPesanan.filter((item) => item.jumlah > 0));
  };

  // hapus semua pesanan
  const hapusSemuaPesanan = () => {
    if (pesanan.length > 0) {
      setPesanan([]);
    }
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

  useEffect(() => {
    // Memilih elemen dengan class "tittle-produk"
    const titleProduk = document.querySelector(".tittle-produk");

    // Memilih elemen dengan class "list-categori"
    const menuCategori = document.querySelector(".list-categori");

    // Mendefinisikan fungsi yang akan dipanggil saat elemen diklik
    function handleClick() {
      // Mengganti keberadaan class "list-produk" pada elemen menuCategori
      menuCategori.classList.toggle("list-produk");
    }

    // Menambahkan event listener klik pada elemen titleProduk
    titleProduk.addEventListener("click", handleClick);

    // Mengembalikan fungsi cleanup yang akan dipanggil saat komponen di-unmount
    return () => {
      // Menghapus event listener klik pada elemen titleProduk
      titleProduk.removeEventListener("click", handleClick);
    };
  }, []);

  const [showDetail, setShowDetail] = useState(false);
  const [selectMenuId, setSelectMenuId] = useState(null);
  const [inputText, setInputText] = useState("");

  function detailItem(itemId) {
    let selectedItem = null;

    if (menuType) {
      selectedItem = menuData[menuType].find((item) => item.id === itemId);
    }

    return (
      <Modal
        show={showDetail && selectMenuId === itemId}
        onHide={() => setShowDetail(false)}
        className="modal-alert"
        centered
        key={selectedItem.id}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src={selectedItem.foto}
            alt=""
          />
          <p className="mt-3" style={{ fontSize: "16px" }}>
            Rp. {selectedItem.harga}
          </p>
          <p>{selectedItem.description}</p>
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
        </Modal.Body>
      </Modal>
    );
  }

  /* menu type */
  const menuData = {
    appetizer: dataMenu.appetizerFood,
    main: dataMenu.mainCourse,
    sea: dataMenu.seaFood,
    dessert: dataMenu.dessertFood,
    fast: dataMenu.fastFood,
  };

  return (
    <div>
      <Container fluid style={{ backgroundColor: "White", color: "white" }}>
        <Row className="d-flex">
          {/* colum left */}
          <Col
            xs={12}
            lg={2}
            md={9}
            className="d-flex"
            style={dasbordStyle.columnLeft}
          >
            <button href="" className="tittle-produk">
              <h1 style={{ fontSize: "25px", color: "black" }}>
                Kategori Menu
              </h1>
            </button>
            <h1
              className="judul-categori"
              style={{ fontSize: "25px", color: "black" }}
            >
              Kategori Menu
            </h1>

            <hr className="hr-left" />
            <Card
              style={{
                margin: "0px 0px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <ul
                className="list-group list-categori"
                style={{ listStyle: "none", gap: "20px" }}
              >
                {menuItems}
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
            <hr className="hr-left" style={{ marginLeft: "40px" }} />
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
              {/*lunch */}
              {menuData[menuType].map((lunch) => {
                return (
                  <Card
                    className="d-flex card-menu"
                    style={{
                      width: "18rem",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    key={lunch.id}
                  >
                    <Card.Body style={dasbordStyle.bodyName}>Kasir</Card.Body>
                    <Card.Img
                      className="img-card"
                      src={lunch.foto}
                      style={dasbordStyle.imgMenu}
                    />
                    <Card.Body style={{ paddingTop: "100%" }}>
                      <Card.Title>
                        {lunch.name} {lunch.kode}
                      </Card.Title>
                      <Card.Text>Rp. {lunch.harga.toLocaleString()} </Card.Text>
                      <div className="d-flex">
                        <button
                          onClick={() => tambahPesanan(lunch, "")}
                          className="button-card-first bg-primary text-white"
                        >
                          Tambah
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}

              {menuData[menuType].map((lunch) =>
                detailItem(lunch.id, menuType)
              )}
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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelectMenuId(item.id);
                      setShowDetail(true);
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
                    {item.pesan && (
                      <p className="pesan-input">Note: {item.pesan}</p>
                    )}
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
