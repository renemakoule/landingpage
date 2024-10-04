import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import Image from "next/image";

const ImageTable = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Image
                src="/poket.jpg"
                alt="Femme en robe blanche"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </TableCell>
            <TableCell>Femme en robe blanche</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Image
                src="/poket.jpg"
                alt="Femme avec un manteau et un bonnet"
                width={100}
                height={100}
                className="w-full h-auto object-cover rounded-lg"
              />
            </TableCell>
            <TableCell>Femme avec un manteau et un bonnet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Image
                src="/poket.jpg"
                alt="Femme en manteau rose"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </TableCell>
            <TableCell>Femme en manteau rose</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="bg-sky-100 rounded-lg w-[100px] h-[100px]"></div>
            </TableCell>
            <TableCell>Div vide</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ImageTable;
