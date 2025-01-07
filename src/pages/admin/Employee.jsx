import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import TableMui from "../../mui/TableMui";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Paginate from "../../mui/Paginate";

const employees = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    salary: "$50,000",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    salary: "$55,000",
  },
  {
    name: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "345-678-9012",
    salary: "$60,000",
  },
  {
    name: "Bob Brown",
    email: "bob.b@example.com",
    phone: "456-789-0123",
    salary: "$48,000",
  },
  {
    name: "Charlie Davis",
    email: "charlie.d@example.com",
    phone: "567-890-1234",
    salary: "$52,000",
  },
  {
    name: "Emily White",
    email: "emily.w@example.com",
    phone: "678-901-2345",
    salary: "$58,000",
  },
  {
    name: "Frank Black",
    email: "frank.b@example.com",
    phone: "789-012-3456",
    salary: "$62,000",
  },
  {
    name: "Grace Green",
    email: "grace.g@example.com",
    phone: "890-123-4567",
    salary: "$47,000",
  },
  {
    name: "Henry Moore",
    email: "henry.m@example.com",
    phone: "901-234-5678",
    salary: "$53,000",
  },
  {
    name: "Isla Blue",
    email: "isla.b@example.com",
    phone: "012-345-6789",
    salary: "$49,000",
  },
];

const Employee = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  return (
    <Box className="p-3">
      <Typography className="fs-4 fw-bold">Employees</Typography>
      <Box className="mt-3 p-3 bg-white rounded-4">
        <TableMui
          loading={loading}
          onSort={(field, direction) => {
            let value = direction === "asc" ? field : "-" + field;
          }}
          styleTableTh={{
            color: "#000000",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            bgcolor: "white",
          }}
          th={{
            name: "Name",
            email: "Email",
            phone: "Phone",
            salary: "Salary",
            action: "Action",
          }}
          td={employees}
          customFields={[
            {
              name: "action",
              data: (value, item) => (
                <div className="d-flex justify-content-center">
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: "10px",
                      border: "1px solid #e0e0e0",
                      padding: "5px 10px",
                    }}
                  >
                    <Button
                      sx={{
                        minWidth: 0,
                        padding: "5px",
                        borderRadius: "50%",
                        color: "#5c5c5c",
                      }}
                    >
                      <IoEyeOutline size={20} />
                    </Button>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginX: 1, backgroundColor: "#e0e0e0" }}
                    />
                    <Button
                      sx={{
                        minWidth: 0,
                        padding: "5px",
                        borderRadius: "0%",
                        color: "#5c5c5c",
                      }}
                    >
                      <FaRegEdit size={20} />
                    </Button>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginX: 1, backgroundColor: "#e0e0e0" }}
                    />
                    <Button
                      sx={{
                        minWidth: 0,
                        padding: "5px",
                        borderRadius: "50%",
                        color: "#f44336",
                      }}
                    >
                      <FaRegTrashAlt size={20} />
                    </Button>
                  </Box>
                </div>
              ),
            },
          ]}
        />

        <Paginate count={50} limit={10} onChange={setPage} />
      </Box>
    </Box>
  );
};

export default Employee;
